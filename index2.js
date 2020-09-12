const axios = require('axios')
const url = require('url')
const api_base_url = 'https://swapi.co/api/'
const api_endpoint = 'people'
const api_key = '123'
const request_url = url.resolve(api_base_url, api_endpoint) + `?key=${api_key}`

async function getStarwarsPeople() {
    const response = await axios.get(request_url)
    const data = await response.data
    console.log(data.results[0].name)
}

getStarwarsPeople()