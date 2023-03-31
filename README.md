# Bootcamp Cloud AWS da DIO - Desafio de Projeto - AWS Serverless
Este repositório foi criado para o versionamento e apresentação do Desafio de Projeto desenvolvido no Bootcamp Cloud AWS da DIO.

Unidade: AWS Foundations <br>
Professor: [Cassiano Peres](https://github.com/cassianobrexbit/)

<a href="https://www.dio.me/bootcamp/bootcamp-cloud-aws"><img src="https://hermes.digitalinnovation.one/tracks/af22d4a0-463f-48c5-a70c-4961d5e618d0.png" align="center" height="120" width="120" ></a> <a href="https://www.dio.me/"><img src="https://hermes.digitalinnovation.one/assets/diome/logo-full.svg" align="center" height="120" width="120" ></a> <br>

## Infraestrutura Como Código com Serverless Framework na AWS
Este é um projeto desenvolvido durante o Bootcamp Cloud AWS da DIO no módulo de AWS Foundations. O objetivo do projeto é construir uma aplicação serverless que utiliza o serviço de banco de dados NoSQL DynamoDB da AWS para armazenar e recuperar informações sobre itens. A infraestrutura da aplicação é definida como código utilizando o framework Serverless Framework.

### Pré-requisitos
Para executar este projeto é necessário ter as seguintes ferramentas instaladas em sua máquina:
    [Node.js](https://nodejs.org/en)
    [AWS CLI](https://docs.aws.amazon.com/pt_br/cli/latest/userguide/install-cliv2.html)
    [Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)

Também é necessário ter uma conta na AWS e configurar suas credenciais de acesso.

### Como usar
Para implantar a aplicação na AWS, execute o comando:
```bash
serverless deploy
```
Após a implantação, a aplicação estará disponível na URL base definida pelo Serverless Framework. Os seguintes endpoints estarão disponíveis:

    GET /
    POST /item
    GET /items
    GET /items/{id}
    PUT /items/{id}
## Agradecimentos
Agradecemos à DIO por proporcionar este desafio de projeto e à AWS por disponibilizar os serviços utilizados nesta aplicação.