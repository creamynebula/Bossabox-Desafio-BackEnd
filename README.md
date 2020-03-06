# Bossabox-Desafio-BackEnd
 Desafio Back-end do BossaBox

FEATURES:

1: Deve haver uma rota para listar todas as ferramentas cadastradas

2: Deve ser possível filtrar ferramentas utilizando uma busca por tag
GET /tools?tag=node (node é a tag sendo buscada neste exemplo)

3: Deve haver uma rota para cadastrar uma nova ferramenta
O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor). A resposta, em caso de sucesso, deve ser o mesmo objeto, com seu novo ID gerado.
POST /tools Content-Type: application/json 
Resposta:
Status: 201 Created
Content-Type: application/json

4: O usuário deve poder remover uma ferramenta por ID
DELETE /tools/:id
Resposta:
Status: 204 No Content 