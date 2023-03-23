import express from "express";
import causa from './src/controllers/causa.js'
import organizacao from './src/controllers/organizacao.js'
import usuario from './src/controllers/usuario.js'

const routes = express.Router();

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
routes.delete("/usuario/:id", usuario.deleteUsuario);

export { routes as default };