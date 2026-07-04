const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Servidor rodando no Docker!");
});

// Se houver uma porta definida pelo Docker/sistema, usa ela. Se não, usa a 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});