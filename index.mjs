import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const helloMessage = 'Hello from me to world ${os.hostname()}'
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log(' wEB Server is running on port ${PORT}')
})