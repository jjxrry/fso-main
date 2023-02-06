import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
  
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletion = (object) => {
    if (window.confirm(`Really delete ${object.name}?`)) {
        const request = axios.delete(`${baseUrl}/${object.id}`)
        return request.then(response => response.data)
    }
}

const replace = (object, updatedObj) => {
    if (window.confirm(`${object} is already added to phonebook, replace the old number with a new one?`)) {
        const request = axios.put(`${baseUrl}/${updatedObj.id}`, updatedObj)
        return request.then(response => response.data)
    }
}
  


export default { getAll, create, update, deletion, replace }