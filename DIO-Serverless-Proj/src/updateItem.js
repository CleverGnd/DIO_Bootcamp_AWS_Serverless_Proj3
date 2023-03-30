"use strict";

const AWS = require("aws-sdk")

// Definição do nome da tabela do DynamoDB
const TABLE_NAME = "ItemTableNew";

// Função responsável por atualizar um item na tabela
const updateItem = async (event) => {

    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    try {
        // Atualização do item na tabela
        await dynamodb.update({
            TableName: TABLE_NAME,
            Key: {id},
            UpdateExpression: 'set itemStatus = :itemStatus',
            ExpressionAttributeValues: {
                ':itemStatus': itemStatus
            },
            ReturnValues: "ALL_NEW"
        }).promise()

        // Retorno de sucesso da operação
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item atualizado com sucesso' }),
        };

    } catch (error) {
        // Tratamento de erros
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao atualizar item' }),
        };
    }
};

module.exports = {
    handler:updateItem
}