const express = require('express')
const axios = require('axios')
const env = require('./config/env')

const app = express()
app.use(express.json())

app.get('/repos', async (req, res) => {

  try {
    const {data} = await axios(env.baseUrl, env.headers.cors, env.headers.method)
    const returnData = data
      .filter(item => item.language === 'C#')
      .map((item) => {
        const result = {
          Avatar: item.owner.avatar_url,
          Titulo: item.full_name,
          Subtitulo: item.description,
          Data_criacao: new Date(item.created_at).toLocaleDateString(),
          Linguagem: item.language
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
