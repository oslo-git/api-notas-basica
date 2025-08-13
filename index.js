const cors = require("cors")
const express = require("express")

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())


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
    {
        id: 5,
        contenido: "Hola maundo 5",
        autor:"Gerardo",
    },
]

app.get("/",(request, response, next) =>{
    response.send("<h1>Hola Osliandy</h1>")
})

app.get("/api/notas/", (request, response) => {
    response.json(notas)
})

app.get("/api/notas/:id", (request, response) => {
    const id = Number(request.params.id)
    const nota = notas.find(nota => nota.id === id)
    
    if (nota){
        response.json(nota)
    }else{
        response.status(404).end()
    }
})

app.delete("/api/notas/:id", (request, response) => {
    const id = Number(request.params.id)
    notas = notas.filter((nota) => nota.id != id)
    response.status(204).end()
})

app.post("/api/notas", (request, response) => {
    const nota = request.body
    const nueva_nota = {
        id: notas.length + 1,
        constenido: nota.contenido,
        autor: nota.autor
    }
    notas = [...notas,nueva_nota]
    response.json(nueva_nota)
})

app.use((request, response) => {
    response.status(404).json({
        error: "No encontrado esta ruta"
    })
})

app.listen(PORT, () => {
    console.log(`La API esta corriendo en el puerto: ${PORT}`)
})