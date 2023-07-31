const app = require('./app')
const port = process.env.prot || 5000

app.listen(5000, () => console.log(`server works ${port}`))