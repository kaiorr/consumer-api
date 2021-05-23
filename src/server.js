const express = require('express')
const axios = require('axios')
const env = require('./config/env')

const app = express()
app.use(express.json())

app.get('/repos', async (req, res) => {

  try {
    const {data} = await axios(env.baseUrl, env.headers.cors, env.headers.method)
    const returnData = data
      .filter(item => item.language === 'TS')
      .map((item) => {
        const result = {
          avatar: item.owner.avatar_url,
          name: item.full_name,
          description: item.description,
          date: new Date(item.created_at).toLocaleDateString('pt-br'),
          language: item.language
        }
        return result
      })

    return res.json(returnData)

  } catch (error) {
    console.error(error)
  }
})

const port = process.env.PORT;
app.listen(process.env.PORT || 5050, console.log(`server is running ${port}`))
