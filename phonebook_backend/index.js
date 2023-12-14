const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

/* CREATE */
app.post('/api/persons',(request, response) => {

  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const person = {
    id: Math.floor(Math.random() * 200),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

/* READ */
app.get('/', (request, response)=>{
    response.send('<h1>Hello, you\'ve reached the Root of the server.')
})

app.get('/api/persons',(request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id',(request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person)
    response.json(person)
  else 
    response.status(404).end()
})

app.get('/api/info',(request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people. <p/><br/>
     <p>${new Date(8.64e15).toString()}<p/>`
  )
})

/* DELETE */
app.delete('/api/persons/:id',(request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()

})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}.`)
})
