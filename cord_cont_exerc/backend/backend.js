const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {


    if (req.method === "POST") {

        let body = "";


        req.on("data", chunk => {
            body += chunk;
        });


        req.on("end", () => {

            console.log("Mensagem recebida:");
            console.log(body);


            res.writeHead(200);
            res.end("Recebido");
        });
    }
});

server.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
});