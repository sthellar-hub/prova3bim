import { Router } from 'express';
import { getAuthentication } from '../utils/jwt.js';

import * as salaRepo from '../repository/salaRepository.js';
import * as salaPermissaoRepo from '../repository/salaPermissaoRepository.js';

const endpoints = Router();
const autenticador = getAuthentication();


endpoints.post('/sala', autenticador, async (req, resp) => {
    let nome = req.body.nome;
    let usuarioLogadoId = req.user.id;

    let id = await salaRepo.inserirSala(nome, usuarioLogadoId);
    resp.send({ novoId: id });
});

endpoints.get('/sala/:id', autenticador, async (req, resp) => {
    let id = req.params.id;
    let info = await salaRepo.buscarSalaPorId(id);
    resp.send(info)
})


export default endpoints;