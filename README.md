## Consumer API

O [consumer_api](http://kaiorr-consumer-api.herokuapp.com/repos) disponibiliza um API REST que permite acesso aos 5 repositórios mais antigos da organização da `Takenet` com a linguagem C#.

As dúvias e solicitações, relacionadas ao acesso da API, devem ser enviados para o email `kaio.rocharibeiro@gmail.com`

Recursos disponíveis para acesso via API:
* [**Repos**](#/repos)


## Métodos
Requisições para API devem seguir os padrões:
| Metodo | Descrição |
|---|---|
|`GET`| Retorna informações de todos repositórios com as condições informadas acima.

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `404` | Registro pesquisado não encontrado (Not found).|


## Exemplo Retorno

    + Body

              "repositorio_0": {
                  "avatar": "https://avatars.githubusercontent.com/u/4369522?v=4",
                  "full_name": "library.data",
                  "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
                  "created_at": "25/10/2013",
                  "language": "C#"
                },

## Host

API está hospedada no plano gratuito do heroku, sendo assim para a primeira requisição pode existir um delay de até 25s.

| `Acesso` | [http://kaiorr-consumer-api.herokuapp.com/repos](http://kaiorr-consumer-api.herokuapp.com/repos)
