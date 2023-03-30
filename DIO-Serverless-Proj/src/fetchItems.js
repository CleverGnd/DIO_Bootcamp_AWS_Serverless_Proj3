"use strict";

const AWS = require("aws-sdk");

// Definição do nome da tabela do DynamoDB
const TABLE_NAME = "ItemTableNew"; // Nome da tabela do DynamoDB

const fetchItems = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient(); // Instância do cliente DocumentClient do DynamoDB

    let items; // Variável para armazenar os itens da tabela
    let lastEvaluatedKey; // Variável para armazenar a chave de paginação da última consulta

    try {
        // Inicia um loop para buscar todos os itens da tabela
        do {
            const results = await dynamodb.scan({
                TableName: TABLE_NAME,
                ExclusiveStartKey: lastEvaluatedKey // Passa a chave de paginação para continuar a busca da última consulta
            }).promise();

            // Se for a primeira consulta, define os itens retornados
            if (!items) {
                items = results.Items;
            } else {
                // Se não for a primeira consulta, adiciona os novos itens aos já existentes
                items = items.concat(results.Items);
            }

            lastEvaluatedKey = results.LastEvaluatedKey; // Atualiza a chave de paginação para continuar a busca
        } while (lastEvaluatedKey); // Continua o loop enquanto houver chaves de paginação

        // Retorno da resposta HTTP com os itens da tabela
        return {
            statusCode: 200,
            body: JSON.stringify(items),
        };
    // Tratamento de erros    
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erro ao buscar itens da tabela" }),
        };
    }
};

module.exports = {
    handler: fetchItems,
};