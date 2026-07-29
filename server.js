const express = require('express');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'sobre.html'));
});

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'produtos.html'));
});

app.get('/galeria', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'galeria.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contato.html'));
});