const rutador=require('express');

const router = rutador.Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a mi api');
})

module.exports= router;