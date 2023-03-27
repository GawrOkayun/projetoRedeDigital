Api do projeto em grupo do módulo 5 SQUAD 1:

Foi criado todo a api respeitando o modelo MVC, para administração do Banco de dados
Foram incluídos todos os verbos http para as requisições no banco de dados do SQLite
e implementar o CRUD. Como em sala de aula estavamos tendo problema com a instalação
dos módulos do projeto, decidimos não colocar no gitignore. Após baixar para executar
o projeto é preciso entrar na pasta API e dar o comando npm start que o banco de dados
será executados com 3 rotas sendo elas: 

routes.get("/causa", causa.findAll);
routes.post("/causa", causa.addCausa);
routes.get("/causa/:id", causa.findCausa);
routes.put("/causa/:id", causa.updateCausa);
routes.delete("/causa/:id", causa.deleteCausa);
routes.get("/organizacao", organizacao.findAll);
routes.post("/organizacao", organizacao.addOrganizacao);
routes.get("/organizacao/:id", organizacao.findOrganizacao);
routes.put("/organizacao/:id", organizacao.updateOrganizacao);
routes.delete("/organizacao/:id", organizacao.deleteOrganizacao);
routes.get("/usuario", usuario.findAll);
routes.post("/usuario", usuario.addUsuario);
routes.get("/usuario/:id", usuario.findUsuario);
routes.put("/usuario/:id", usuario.updateUsuario);
routes.delete("/usuario/:id", usuario.deleteUsuario);. 

Decidimos implementar um ORM no lugar do DAO e para isso fizemos o uso do Sequelize, 
que também serviu de validação dos dados, a API foi hospedade na vercel no link:
. E os testes automatizados foram feitos com jest, para testar as rotas da api.
