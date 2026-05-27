const http = require("http");

let data = [];

const server = http.createServer((req, res) => {



    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    } 
    else if (req.url === "/") {
        const fs = require("fs");


        fs.readFile("./site/index.html", (err, data) => {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
        res.end(data);
        });
    }

    else if (req.url === "/createRote" && req.method === "POST") {


        console.log("creatRote acessada");
        let body = "";

        req.on("data", chunk => {
            body += chunk
        });

        req.on("end", () => {

            const dataRecive = JSON.parse(body);
            console.log(`Data recebida: ${dataRecive}`);
            data.push(dataRecive);

            res.writeHead(200, {
                "content-type" : "application/json"
            });

            const mensagem = JSON.stringify({
                message : "Rota criada",
                rota : dataRecive,
            })
            res.end(mensagem);
            console.log(`Mensagem: ${mensagem}`);

        });

    }
    
    else if (req.url === "/getRotes" && req.method === "GET") {

        res.writeHead(200, {
            "content-type" : "application/json"
        });

        res.end(JSON.stringify(data));

    }
    

    else {
        res.writeHead(404);
        res.end("Rota não encontrada");
    }

});

server.listen(3000, () => {
    console.log("Server rodando");
});