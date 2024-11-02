const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Brenton Andony 2290-21-12374',
        titulo: 'Perros'
    });
});

app.get('/pastor', (req, res) => {
    res.render('pastor', {
        nombre: 'Brenton Andony 2290-21-12374',
        titulo: 'Perros'
    });
});

app.get('/golden', (req, res) => {
    res.render('golden', {
        nombre: 'Brenton Andony 2290-21-12374',
        titulo: 'Perros'
    });
});
app.get('/pequines', (req, res) => {
    res.render('pequines', {
        nombre: 'Brenton Andony 2290-21-12374',
        titulo: 'Perros'
    });
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
