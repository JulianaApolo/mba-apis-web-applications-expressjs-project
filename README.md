#Atividade do MBA da Impacta de Engenharia de Software da disciplina XX

Crie um novo projeto expressJS utilizando como ferramenta para gera��o deste o express-generator e implemente um novo arquivo de rotas para o c�lculo do IMC conforme slides apresentados nas aulas anteriores.

O objetivo � criarmos uma rota POST /imc/calculate que receba como par�metro de entrada um objeto JSON, no formato
{
  "weight": number,
  "height": number
}

retornando o valor calculado no formato abaixo:

{
  "weight": number,
  "height": number,
  "imc": number,
  "imcDescription": text
}

##Como rodar
```
npm install
npm start
curl -X POST http://localhost:3000/imc/calculate -d '{"height":"1.77", "weight":"60"}' -H 'Content-Type: application/json'
```