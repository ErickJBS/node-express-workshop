const express = require('express')

const port = process.env.port || 3000;
const app = new express()

const router = new express.Router();
router.get('/notes/:userId', (request, response) => {
    const raw = request.query.raw;
    response.send(`GET: ${JSON.stringify(raw)}`)
})

app.use('/api/', router);
app.listen(port, () => {
    console.log(`App running`)
})