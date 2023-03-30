"use strict";

// Importação da bibliotecas
const {v4} = require("uuid");
const AWS = require("aws-sdk")

// Definição do nome da tabela do DynamoDB
const TABLE_NAME = "ItemTableNew";

const insertItem = async (event) => {
//module.exports.insertItem = async (event) => {

    const {item} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4()

    // Criação de uma instância do cliente DocumentClient do DynamoDB
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    }

    // Inserção do novo item na tabela do DynamoDB
    await dynamodb.put(
        {
            TableName: TABLE_NAME,
            Item: newItem
        }
    ).promise()

    // Retorno da resposta HTTP com o novo item inserido
    return {
        statusCode: 200,
        body: JSON.stringify(newItem),
    };
};

// Exportação da função 'insertItem' como manipulador de eventos da função lambda
module.exports = {
    handler:insertItem
}