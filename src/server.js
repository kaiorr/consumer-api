const express = require('express')
const axios = require('axios')
const env = require('./config/env')

const app = express()
app.use(express.json())

app.get('/repos', async (req, res) => {

  try {
    const {data} = await axios(env.baseUrl, env.headers.cors, env.headers.method)
    const result = {}

    data.forEach((item, index) => {
      if (item.language === 'C#') {
        result[`repositorio_${index}`] = {
          avatar: item.owner.avatar_url,
          full_name: item.name,
          description: item.description,
          created_at: new Date(item.created_at).toLocaleDateString('pt-br'),
          language: item.language
        }
      }
    })

    return res.json(result)

  } catch (error) {
    res.status(404).json({message: 'Erro nos dados de requisição, favor confirmar a url acessada!!!'})
  }
})

const port = process.env.PORT
app.listen(process.env.PORT || 5050, console.log(`server is running ${port}`))
