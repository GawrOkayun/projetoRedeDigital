import express from 'express';
import { causaGet, causaPost, causaPut, causaDelete,organizacaoGet, organizacaoPost, organizacaoPut, organizacaoDelete, usuarioGet, usuarioPost, usuarioPut, usuarioDelete } from './controller/querys.js'

const router = express.Router()

router.get('/causa', causaGet)
router.post('/causa', causaPost)
router.put('/causa/:id', causaPut)
router.delete('/causa/:id', causaDelete)
router.get('/organizacao', organizacaoGet)
router.post('/organizacao', organizacaoPost)
router.put('/organizacao/:id', organizacaoPut)
router.delete('/organizacao/:id', organizacaoDelete)
router.get('/usuario', usuarioGet)
router.post('/usuario', usuarioPost)
router.put('/usuario/:id', usuarioPut)
router.delete('/usuario/:id', usuarioDelete)


export default router;