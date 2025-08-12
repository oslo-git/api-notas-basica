const http = require("http")

let notas = [
    {
        id: 1,
        contenido: "Hola maundo 1",
        autor:"Osliandy",
    },
    {
        id: 2,
        contenido: "Hola maundo 2",
        autor:"Pedro",
    },
    {
        id: 3,
        contenido: "Hola maundo 3",
        autor:"Juan",
    },
    {
        id: 4,
        contenido: "Hola maundo 4",
        autor:"Fernando",
    },
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(notas))
})

const PORT = 3005
app.listen(PORT)
console.log(`La API esta corriendo en el puerto: ${PORT}`)

