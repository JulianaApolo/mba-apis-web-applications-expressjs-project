var express = require('express');
var router = express.Router();

function calculateImc(height, weight) {
    return Number((weight / (height ** 2)).toFixed(2));
}

function translateImc(imc) {
    if (imc < 18.5) imcDescription = "magreza";
    else if (imc <= 24.9) imcDescription = "normal";
    else if (imc <= 29.9) imcDescription = "sobrepeso";
    else imcDescription = "obesidade";

    return imcDescription;
}

router.post('/', function(req, res, next) {
    const { height, weight } = req.body;
    const imc = calculateImc();
    const imcDescription = translateImc(imc);
    
    
    res.send(JSON.stringify({'height': height, 'weight': weight, 'imc': imc, 'imcDescription': imcDescription}));
});

module.exports = router;
