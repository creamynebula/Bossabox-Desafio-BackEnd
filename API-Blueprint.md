FORMAT: 1A

# VUTTR

API para acesso à VUTTR (Very Useful Tools to Remember). A aplicação é um repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# Group Ferramentas

## Ferramenta [/ferramenta]

Uma ferramenta tem os seguintes atributos:

+ _id (String) - Identificador único da ferramenta, gerado automaticamente pelo servidor.
+ title (String) - Nome da ferramenta
+ link (String) - Local aonde se encontra a ferramenta (url)
+ description (String) - Descrição do que a ferramenta faz
+ tags (Array[String]) - Array contendo as tags

### Listar todas as ferramentas [GET]

Uso: localhost:3000/ferramenta

+ Response 200 (application/json)

[
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2c1bd407e133813ccea",
    "title": "Chihaya",
    "link": "chihayafuru.jp",
    "description": "Karuta Weapon",
    "__v": 0
  },
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2cfbd407e133813cceb",
    "title": "Chihaya2",
    "link": "chihayafuru2.jp",
    "description": "Karuta Weapon2",
    "__v": 0
  },
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2d5bd407e133813ccec",
    "title": "Chihaya3",
    "link": "chihayafuru3.jp",
    "description": "Karuta Weapon3",
    "__v": 0
  },
  {
    "tags": [
      "tag4",
      "tag5",
      "tag6"
    ],
    "_id": "5e6aa2e1bd407e133813cced",
    "title": "Chihaya4",
    "link": "chihayafuru4.jp",
    "description": "Karuta Weapon4",
    "__v": 0
  },
  {
    "tags": [
      "tag4",
      "tag5",
      "tag6"
    ],
    "_id": "5e6aa2e9bd407e133813ccee",
    "title": "Chihaya5",
    "link": "chihayafuru5.jp",
    "description": "Karuta Weapon5",
    "__v": 0
  },
  {
    "tags": [
      "tag4",
      "tag5",
      "tag6"
    ],
    "_id": "5e6aa2efbd407e133813ccef",
    "title": "Chihaya6",
    "link": "chihayafuru6.jp",
    "description": "Karuta Weapon6",
    "__v": 0
  }
]

### Listar ferramentas por tag [GET]

Uso: localhost:3000/ferramenta?tag=tag1


+ Response 200 (application/json)

[
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2c1bd407e133813ccea",
    "title": "Chihaya",
    "link": "chihayafuru.jp",
    "description": "Karuta Weapon",
    "__v": 0
  },
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2cfbd407e133813cceb",
    "title": "Chihaya2",
    "link": "chihayafuru2.jp",
    "description": "Karuta Weapon2",
    "__v": 0
  },
  {
    "tags": [
      "tag1",
      "tag2",
      "tag3"
    ],
    "_id": "5e6aa2d5bd407e133813ccec",
    "title": "Chihaya3",
    "link": "chihayafuru3.jp",
    "description": "Karuta Weapon3",
    "__v": 0
  }
]

### Cadastrar nova ferramenta [POST]

Essa ação permite você adicionar uma nova ferramenta.
Uso: [POST] http://localhost:3000/ferramenta

Você pode colocar uma nova ferramenta no banco de dados com um request POST no formato JSON contendo os atributos da ferramenta e seus respectivos valores. O atributo _id vai ser gerado automaticamente e não precisa ser incluído no request. Os atributos 'description' e 'tags' são opcionais.

+ title - Nome da ferramenta
+ link - Local aonde se encontra a ferramenta
+ description - Descrição do que a ferramenta faz
+ tags - Array contendo as tags(strings)

+ Request (application/json)

        {
	        "title": "Chihaya6",
	        "link": "chihayafuru6.jp",
	        "description": "Karuta Weapon6",
	        "tags": [
		        "tag4",
		        "tag5",
		        "tag6"
	        ]
        }

+ Response 201 (application/json)

    + Body

            {
                "title": "Chihaya6",
                "link": "chihayafuru6.jp",
                "description": "Karuta Weapon6",
                "tags": [
                    "tag4",
                    "tag5",
                    "tag6"
                ]
            }

### Remover uma ferramenta [DELETE]

Essa ação permite você remover uma ferramenta por ID, Título ou remover todas contendo uma tag.
Uso: [DELETE] http://localhost:3000/ferramenta?id=5e6a96cff9aff70bbc59c9c8
ou [DELETE] http://localhost:3000/ferramenta?tag=tag1
ou [DELETE] http://localhost:3000/ferramenta?title=Chihaya2

+ Response 204 (application/json)

  + Body

    {
      "n": 1,
      "opTime": {
        "ts": "6803423944293482498",
        "t": 5
      },
      "electionId": "7fffffff0000000000000005",
      "ok": 1,
      "$clusterTime": {
        "clusterTime": "6803423944293482498",
        "signature": {
          "hash": "82hPjLB7xKB0TMr/WBIo3rGP7bU=",
          "keyId": "6795223266882486274"
        }
      },
      "operationTime": "6803423944293482498",
      "deletedCount": 1
    }