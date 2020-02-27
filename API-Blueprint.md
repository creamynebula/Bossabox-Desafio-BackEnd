FORMAT: 1A
HOST: http://VUTTR.apiblueprint.org/

# VUTTR

API para acesso à VUTTR (Very Useful Tools to Remember). A aplicação é um repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# VUTTR API Root [/]

This resource does not have any attributes. Instead it offers the initial API affordances in the form of the links in the JSON body.

It is recommend to follow the “url” link values, [Link](https://tools.ietf.org/html/rfc5988) or Location headers where applicable to retrieve resources. Instead of constructing your own URLs, to keep your client decoupled from implementation details.

## Retrieve the Entry Point [GET]

+ Response 200 (application/json)

        {
            "ferramentas_url": "/ferramentas"
        }

## Group Ferramentas

Recursos relacionados às ferramentas

## Ferramentas [/ferramentas/{ferramenta_id}]

Uma ferramenta tem os seguintes atributos:

+ title - Nome da ferramenta
+ link - Local aonde se encontra a ferramenta
+ description - Descrição do que a ferramenta faz
+ tags - Array contendo as tags

+ Parameters
    + ferramenta_id: 1 (required, number) - ID of the ferramenta in form of an integer

### View a ferramentas Detail [GET]

+ Response 200 (application/json)

        {
            "title": "Favourite programming language?",
            "link": "/ferramentas/1",
            "description": "",
            "tags": []
        }

## tag [/ferramentas/{ferramenta_id}/tags/{tag_id}]

+ Parameters
    + ferramenta_id: 1 (required, number) - ID of the ferramenta in form of an integer
    + tag_id: 1 (required, number) - ID of the tag in form of an integer

### Vote on a tag [POST]

This action allows you to vote on a ferramenta's tag.

+ Response 201

    + Headers

            Location: /ferramentas/1

## ferramentas Collection [/ferramentas{?page}]

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

### Create a New ferramenta [POST]

You may create your own ferramenta using this action. It takes a JSON object containing a ferramenta and a collection of answers in the form of tags.

+ title (string) - Nome da ferramenta
+ tags (array[string]) - Coleção de tags

+ Request (application/json)

        {
            "title": "Favourite programming language?",
            "tags": []
        }

+ Response 201 (application/json)

    + Headers

            Location: /ferramentas/2

    + Body

            {
                "title": "Favourite programming language?",
                "link": "/ferramentas/2",
                "description": "",
                "tags": []
            }

