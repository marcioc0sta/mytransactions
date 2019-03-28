## Minhas transações app
Um app feito em React/Redux onde o usuário pode cadastrar uma transação, ver a lista de transações assim como o total de transações efetuadas.

## Para rodar o projeto
 - Rode `yarn`
 - Espere a instalação das dependências
 - Rode `yarn start`

## Testes
  - Para executar testes unitários rode `npm run test`

## Cadastro de transações
 - Para cadastrar uma transação *positiva* basta  adicionar seu valor e descrição em `/add-transaction`
 - Para cadastrar uma transação *negativa* basta  adicionar seu valor (com "-" ex: `-10,00`) e descrição em `/add-transaction`
 - Caso queira iniciar a aplicação já com dados, insira no seu localstorage a key/value abaixo:
    * Key: `transactionList`
    * Value: `[{"description":"Crédito","value":"1.234,56","timestamp":1552865146917,"id":"aa8fa1ec80ee6a2ba0511552865146917"},{"description":"débito","value":"-567,89","timestamp":1552865162589,"id":"e7b0cf7104f439b164571552865162589"},{"description":"transação","value":"200,00","timestamp":1548986400000,"id":"86fa32d0b5581fa399371553717738044"},{"description":"transação janeiro","value":"-120,00","timestamp":1546308000000,"id":"95cc9535ad634f7da5891553717856217"},{"description":"transação 2017","value":"10,00","timestamp":1488337200000,"id":"27a234fd92b441db08921553724684365"}]`

## Contribuir
Para contribuir, faça um pr para a branch master. 

Ao commitar use as flags `feat, feature, fix, chore, refactor` para seus commits. Exemplo `feat: Meu commit`
