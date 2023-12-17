require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

morgan.token('body',  (req, res) => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

/* CREATE */
app.post('/api/persons',(request, response) => {

  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
  })
  } else {
    const person = new Person({
      name: body.name,
      number: body.number
    })

    person.save()
      .then(savedPerson => {
          response.json(savedPerson)
        })
  } 
})

/* READ */
app.get('/', (request, response)=>{ 
    response.send('<h1>Hello, you\'ve reached the Root of the server.')
})

app.get('/api/persons',(request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id',(request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.get('/api/info',(request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people. <p/><br/>
     <p>${new Date(8.64e15).toString()}<p/>`
  )
})

/* UPDATE */
app.put('/api/persons/:id',(request, response) => {
  const {name, number} = request.body
  Person.findByIdAndUpdate(request.params.id, {name, number}, { new: true}).then((updatedPerson) => {
      response.json(updatedPerson)
    })
})

/* DELETE */
app.delete('/api/persons/:id',(request, response) => {
  Person.findByIdAndDelete(request.params.id).then(() => {
      response.status(204).end()
    })
})

app.use(unknownEndpoint)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})
