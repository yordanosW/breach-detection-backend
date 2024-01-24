const express = require ('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/breach', async (req, res) =>{
    const { email } = req.query
    const url = `${process.env.HIBP_BASE_URL}/${email}?truncateResponse=false`
    const response = await fetch(url,{
        headers: {
            'hibp-api-key': process.env.HIBP_KEY,
            'user-agent': 'yordi\'s app'
        }
    })
    const data = await response.json() 
    res.json(data)

})
const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`listening on port ${PORT}`))