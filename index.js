import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 4000

// Router
app.get('/', (req, res) => {
	res.send('Velkommen til min hjemmeside')
})

// Sangliste - med GET parameter eksempel
app.get('/songs', (req, res) => {
	console.log(req.query);
	res.send('Sange - List alle')
})

// Sangdetaljer - med URL parameter
app.get('/songs/:id([0-9]*)', (req, res) => {
	console.log(req.params);
	res.send('Sange - Detaljer')
})

// Opret ny sang
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