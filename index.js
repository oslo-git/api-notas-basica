const express = require("express")
const app = express()

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

app.get("/",(request, response, next) =>{
    response.send("<h1>Hola Osliandy</h1>")
})

app.get("/notas", (request, response) => {
    response.json(notas)
})

app.get("/notas/:id", (request, response) => {
    const id = Number(request.params.id)
    const nota = notas.find(nota => nota.id === id)
    
    if (nota){
        response.json(nota)
    }else{
        response.status(404).end()
    }
})

app.delete("/notas/:id", (request, response) => {
    const id = Number(request.params.id)
    notas = notas.filter((nota) => nota.id != id)
    response.status(204).end()
})

const PORT = 3005
app.listen(PORT, () => {
    console.log(`La API esta corriendo en el puerto: ${PORT}`)
})