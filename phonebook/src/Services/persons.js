import axios from 'axios'

const url = 'http://localhost:3001/persons'

/* Service that displays all the entries of the
 phonebook database. */
 const getAllEntries = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
  }

/* Service that creates a new person entry in the
 phonebook database. */
 const createEntry = newPerson => {
   const request = axios.post(url, newPerson)
   return request.then(response => response.data)
 }

/* Service that updates a person of the
 phonebook database. */
 const updateEntry = (id, newPerson) => {
    const request = axios.put(`${url}/${id}`, newPerson)
    return request.then(response => response.data)
 }

 /* Service that deletes a person of the
 phonebook database. */
 const deleteEntry = (id) => {
   return axios.delete(`${url}/${id}`)
}


 export default { getAllEntries, createEntry, updateEntry, deleteEntry }