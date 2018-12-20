# Epicom Test

## Summary

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Setup](#setup)
- [Running](#running)
- [API](#api)
    - [SKUs](#skus)
        - [Add new SKU](#add-new-sku)
        - [Get all SKUs](#get-all-skus)
        - [Get SKU by ID](#get-sku-by-id)
        - [Update existing SKU](#update-existing-sku)
        - [Delete SKU](#delete-sku)
        - [SKU notification](#sku-notification)

## Dependencies

The project requires only [NodeJs](www.nodejs.org)

## Installation

Clone the repository:

```shell
git clone https://github.com/JuanAlmeida12/epicom.git
```

Open prompt/bash into repository directory and run the following command:
```shell
npm install
```
or just:
```shell
npm i
```
Now you are able to run the server.

## Setup

It is necessary to change the `database` and` epicom` values ​​in config files on `/config` folder for the Api works properly.

## Running

The server can be started on two modes:
### Development
In development mode the server runs using ```nodemon```, which is a simple monitor script for use in development.

To run in this mode, run the following command:
```shell
npm run dev
```

### Production
In production mode the server runs using ```pm2```, which is a production process manager.

To run in this mode, run the following command:
```shell
npm run production
```

## API
### SKUs
#### Add new SKU
```
POST /api/v1/sku
```
##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `sku` | `JSON` | **Required**. `JSON` with sku information. Only `id` field is required in this JSON.`id` is `Number` |

##### Exemple
```json
{
	"sku": {
	    "nome": "Produto 2",
	    "nomeReduzido": null,
	    "id": 322359,
	    "produtoId": 270230,
	    "codigo": "SKU2",
	    "modelo": null,
	    "ean": null,
	    "url": null,
	    "foraDeLinha": false,
	    "preco": 70,
	    "precoDe": null,
	    "disponivel": false,
	    "estoque": 0,
	    "dimensoes": {
	        "altura": null,
	        "largura": null,
	        "comprimento": null,
	        "peso": null
	    },
	    "imagens": [],
	    "grupos": [],
	    "ativo": true
	}
}
```

##### Response
```
Status: 201 Created
```
```json
{
    "imagens": [],
    "grupos": [],
    "_id": "5c1b1146c07f4147dc41dd5a",
    "nome": "Produto 2",
    "nomeReduzido": null,
    "id": 322359,
    "produtoId": 270230,
    "codigo": "SKU2",
    "modelo": null,
    "ean": null,
    "url": null,
    "foraDeLinha": false,
    "preco": 70,
    "precoDe": null,
    "disponivel": false,
    "estoque": 0,
    "dimensoes": {
        "altura": null,
        "largura": null,
        "comprimento": null,
        "peso": null
    },
    "ativo": true,
    "__v": 0
}
```

#### Get all SKUs
##### Query
| Name | Type | Description |
| --- | --- | --- |
| `minPrice` | `Number` | This `Number` set the min price in returned SKUs |
| `maxPrice` | `Number` | This `Number` set the max price in returned SKUs |

Ex: `/api/v1/sku?minPrice=10&maxPrice=40`

```
GET /api/v1/sku
```
##### Response
```
Status: 200 OK
```
```json
[
    {
        "dimensoes": {
            "altura": null,
            "largura": null,
            "comprimento": null,
            "peso": null
        },
        "imagens": [],
        "grupos": [],
        "_id": "5c1b1146c07f4147dc41dd5a",
        "nome": "Produto 2",
        "nomeReduzido": null,
        "id": 322359,
        "produtoId": 270230,
        "codigo": "SKU2",
        "modelo": null,
        "ean": null,
        "url": null,
        "foraDeLinha": false,
        "preco": 70,
        "precoDe": null,
        "disponivel": false,
        "estoque": 0,
        "ativo": true,
        "__v": 0
    }
]
```

#### Get SKU by ID
```
GET /api/v1/sku/{id}
```
##### Response
```
Status: 200 OK
```
```json
[
    {
        "dimensoes": {
            "altura": null,
            "largura": null,
            "comprimento": null,
            "peso": null
        },
        "imagens": [],
        "grupos": [],
        "_id": "5c1b1146c07f4147dc41dd5a",
        "nome": "Produto 2",
        "nomeReduzido": null,
        "id": 322359,
        "produtoId": 270230,
        "codigo": "SKU2",
        "modelo": null,
        "ean": null,
        "url": null,
        "foraDeLinha": false,
        "preco": 70,
        "precoDe": null,
        "disponivel": false,
        "estoque": 0,
        "ativo": true,
        "__v": 0
    }
]
```

#### Update existing SKU
```
PUT /api/v1/sku/{id}
```

##### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `sku` | `JSON` | **Required**. `JSON` with sku information. |

##### Exemple
```json
{
	"sku": {
	    "nome": "Produto 2",
	    "nomeReduzido": null,
	    "id": 322359,
	    "produtoId": 270230,
	    "codigo": "SKU2",
	    "modelo": null,
	    "ean": null,
	    "url": null,
	    "foraDeLinha": false,
	    "preco": 70,
	    "precoDe": null,
	    "disponivel": false,
	    "estoque": 0,
	    "dimensoes": {
	        "altura": null,
	        "largura": null,
	        "comprimento": null,
	        "peso": null
	    },
	    "imagens": [],
	    "grupos": [],
	    "ativo": true
	}
}
```

##### Response
```
Status: 201 Created
```
```json
{
    "n": 1,
    "nModified": 0,
    "opTime": {
        "ts": "6636921033028796417",
        "t": 5
    },
    "electionId": "7fffffff0000000000000005",
    "ok": 1,
    "operationTime": "6636921033028796417",
    "$clusterTime": {
        "clusterTime": "6636921033028796417",
        "signature": {
            "hash": "FSDQnbkFIROjK0IatHbAHuajwZ0=",
            "keyId": "6580393602646540290"
        }
    }
}
```


#### Delete SKU
```
DELETE /api/v1/sku/{id}
```
##### Response
```
Status: 203
```
```json
{
    "n": 1,
    "opTime": {
        "ts": "6636922136835391489",
        "t": 5
    },
    "electionId": "7fffffff0000000000000005",
    "ok": 1,
    "operationTime": "6636922136835391489",
    "$clusterTime": {
        "clusterTime": "6636922136835391489",
        "signature": {
            "hash": "6xdyM66LXtEajmu8AGFDR8Fjkf0=",
            "keyId": "6580393602646540290"
        }
    }
}
```

#### SKU notification
```
POST /api/v1/sku/notification
```
This endpoint receive an array with each item follow this model:
```
{
  "tipo": "sku_associado",
  "dataEnvio": "2015-07-14T13:56:36",
  "parametros": {
    "idProduto": 100,
    "idSku": 200
  }
}
``` 
Should respond with `Code 200`