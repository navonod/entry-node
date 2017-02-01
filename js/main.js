var http = require("http");
require("./account.js");
require("./tx.js");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    from = new Account("fromAccount", 100);
    to = new Account("toAccount", 100);
    tx = new Tx(new Date(), from, to, "Test Tx", 350.00);

    response.end('Tx Amount: '+tx.amount+'; From: '+tx.from.name+'; To: '+tx.to.name+'; Date: '+tx.date);
}).listen(8081);

console.log('Server listening at http://localhost:8081');