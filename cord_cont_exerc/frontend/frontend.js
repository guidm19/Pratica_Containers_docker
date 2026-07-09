const http = require("http");
const querystring = require("querystring");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

            <h1>Frontend</h1>

            <form method="POST">
                <input name="mensagem" type="text">
                <button type="submit">
                    Enviar
                </button>
            </form>

            </body>
            </html>
        `);
    }

    if (req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });


        req.on("end", () => {

            const dados = querystring.parse(body);

            const mensagem = dados.mensagem;

            const options = {
                hostname: "backend",
                port: 4000,
                path: "/",
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                }
            };

            const request = http.request(options);

            request.write(mensagem);
            request.end();

            res.writeHead(200);
            res.end("Mensagem enviada para backend");

        });
    }

});

server.listen(PORT, () => {
    console.log(`Frontend rodando na porta ${PORT}`);
});