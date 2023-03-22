var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const { height, weight } = req.body;
    const imc = Number((weight / (height ** 2)).toFixed(2));
    
    let imcDescription = '';
    if (imc < 18.5) imcDescription = "magreza";
    else if (imc <= 24.9) imcDescription = "normal";
    else if (imc <= 29.9) imcDescription = "sobrepeso";
    else this.imcDescription = "obesidade";
    
    res.send(JSON.stringify({'height': height, 'weight': weight, 'imc': imc, 'imcDescription': imcDescription}));
});

module.exports = router;
