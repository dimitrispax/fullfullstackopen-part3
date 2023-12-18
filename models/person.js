require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)

  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

/* Custom phone number validator function */
const validatePhoneNumber = (value) => {
  const phoneNumberRegex = /^(\d{2,3})-(\d+)$/

  /* Check if the phone number matches the specified format*/
  if (!phoneNumberRegex.test(value)) {
    return false
  }

  /* Check if the length is 8 or more */
  const phoneNumberParts = value.split('-')
  if (phoneNumberParts.join('').length < 8) {
    return false
  }

  return true
}

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    validate: {
      validator: validatePhoneNumber,
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)