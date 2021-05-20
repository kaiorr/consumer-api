const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {

  try {
    const {data} = await axios('https://api.github.com/orgs/rocketseat/repos')
    console.log(data)

    return res.json(data)

  } catch (error) {
    console.error(error)
  }
})

app.listen('5050', console.log('server is running localhost:5050'))
