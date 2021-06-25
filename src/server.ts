import express from "express";

const app = express();

/*
    Métodos

 GET        => Buscar uma informação
 POST       => Inserir (criar) uma informação
 PUT        => Alterar uma infromação
 DELETE     => Remover um dado
 PATCH      => Alterar uma informação específica
*/

app.get("/teste", (request, response) => {
    //Request  => Entrando
    //Response => Saindo
    return response.send("NLW")
});

app.post("/test-post", (request, response) => {
    return response.send("Olá, método POST")
});
// http://localhost:3000
app.listen(3000, () => console.log("Server is running NLW"));