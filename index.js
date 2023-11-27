import express from 'express'

const app = express()
const port = 4000

// Router
app.get('/', (req, res) => {
	res.send('Velkommen til min hjemmeside')
})



app.get('/songs', (req, res) => {
	console.log(req.query);
	res.send('Sange - List alle')
})
app.post('/songs', (req, res) => {
	res.send('Sange - Opret ny sang')
})



// 404
app.get('*', (req, res) => {
	res.send('Siden du leder efter, blev ikke fundet')
})

app.listen(port, () => {
	console.log(`Server kører på port ${port}`);
})