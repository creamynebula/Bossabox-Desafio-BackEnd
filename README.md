# Bossabox-Desafio-BackEnd
 Desafio Back-end do BossaBox

Para executar navegue até a folder do projeto e execute
'npm run start'
ou
'npm run start-watch'

A segunda opção vai usar o nodemon, que reinicia o servidor automaticamente se houver mudança em algum dos arquivos (js, mjs, json) usados pelo projeto.

Dependências: body-parser, express, mongoose

FEATURES:

1: Rota para listar todas as ferramentas:
[GET] localhost:3000/ferramenta

2: Listar todas as ferramentas contendo uma certa tag 'tag1':
[GET] localhost:3000/ferramenta?tag=tag1

3: Cadastrar uma nova ferramenta:
[POST] http://localhost:3000/ferramenta

O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, é o mesmo objeto, com seu novo ID gerado.

4: Remover ferramenta por ID:
[DELETE] http://localhost:3000/ferramenta?id=5e6a96cff9aff70bbc59c9c8

5: Remover ferramenta por Título:
[DELETE] http://localhost:3000/ferramenta?title=Chihaya2

6: Remover todas as ferramentas contendo uma certa tag:
[DELETE] http://localhost:3000/ferramenta?tag=tag1