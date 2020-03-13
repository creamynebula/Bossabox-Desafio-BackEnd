FORMAT: 1A

# VUTTR

API para acesso à VUTTR (Very Useful Tools to Remember). A aplicação é um repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Ferramentas

Uma ferramenta tem os seguintes atributos:

+ _id - Identificador único da ferramenta, gerado automaticamente
+ title - Nome da ferramenta
+ link - Local aonde se encontra a ferramenta
+ description - Descrição do que a ferramenta faz
+ tags - Array contendo as tags

### Listar todas as ferramentas [GET]: localhost:3000/ferramenta

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

### Listar ferramentas por tag [GET]: localhost:3000/ferramenta?tag=tag1

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

+ Você pode colocar uma nova ferramenta no banco de dados com um request POST no formato JSON contendo os atributos da ferramenta e seus respectivos valores. O atributo _id vai ser gerado automaticamente e não precisa ser incluído no request. Os atributos 'description' e 'tags' são opcionais.

+ title - Nome da ferramenta
+ link - Local aonde se encontra a ferramenta
+ description - Descrição do que a ferramenta faz
+ tags - Array contendo as tags

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

    + Headers

            X-Powered-By: Express
            Content-Type: text/html; charset=utf-8
            Content-Length: 191
            ETag: W/"bf-xaCx1QaCG8TKqM+L8D5iBm5aRCA"
            Date: Thu, 12 Mar 2020 21:00:31 GMT
            Connection: keep-alive

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

## Coleção de ferramentas [/ferramentas]

+ Parameters
    + page: 1 (optional, number) - The page of ferramentas to return

### List All ferramentas [GET]

+ Response 200 (application/json)

    + Headers

            Link: </ferramentas?page=2>; rel="next"

    + Body

            [
                {
                    "title": "Favourite programming language?",
                    "link": "/ferramentas/1",
                    "description": "",
                    "tags": []
                }
            ]

### Criar nova ferramenta [POST]



