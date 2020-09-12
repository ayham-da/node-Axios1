const https = require('https')

https.get('https://swapi.co/api/people/', res => {
    let data = ''

    res.on('data', chunk => {
        console.log('chunk', chunk)
        data += chunk
    })
    res.on('end', () => {
        data =JSON.parse(data)
        console.log(data.results[0].name)
    })
})