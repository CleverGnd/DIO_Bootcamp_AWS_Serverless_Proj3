"use strict";

const AWS = require("aws-sdk");

// Definição do nome da tabela do DynamoDB
const TABLE_NAME = "ItemTableNew";

const fetchItem = async (event) => {
  //module.exports.fetchItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    // Extrai o ID do item da URL da requisição
    const {id} = event.pathParameters

    let item;

    try {
        // Realiza a operação de leitura do item com o ID fornecido
        const result = await dynamodb.get({
            TableName: TABLE_NAME,
            Key: {id}
        }).promise();

        // Salva o item encontrado na variável "item"
        item = result.Item;

    } catch (error) {
        // Em caso de erro, imprime o erro no console e retorna uma resposta HTTP 500 indicando falha
        console.error(error);
    
        // Retorna uma resposta HTTP 200 com o item encontrado
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Erro ao buscar item na tabela" }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
};

module.exports = {
    handler: fetchItem,
};