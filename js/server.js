const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

const { name } = require('ejs');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.urlencoded({extended:true}));

app.get('/about', (req, res) => {
    res.send(`<h1> This is the about page for Grocerease</h1> <p>This is a grocery list management app. </p>`)
});

app.get('/user/:username', (req, res) => {
    const username= req.params.username;
    res.send(`<h1> Welcome, ${username}! </h1> <p>Check out your profile. </p>`)
})

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname,`../public/form.html`));
});
app.post('/submitted', (req, res) => {
    console.log(req.body);
    const groceryitem = req.body.item;  
    res.send(`<h1>Item Submitted</h1> <p>Yay! You submitted: ${groceryitem} to the list. </p>`);
});

const port=3000;

app.get('/', (req, res) => {
    db.all('SELECT * FROM groceries', [], (err, rows ) => {
        if (err) {
            return res.status(500).send('Database error.');
        }
        res.render('index', {groceries: rows});
    });
});

app.post('/groceries', (req, res) => {
    console.log(req.body);
    const {item} = req.body;
    db.run ('INSERT INTO groceries(item) VALUES (?)', [item], function(err) {
        if (err){
            console.error('Database Error', err.message);
            return res.status(500).send('Couldnt add item.');
        }
        res.redirect('/');
    });
});

app.post('/groceries/delete/:id', (req, res) => {
    const {id} = req.params;
    db.run('DELETE FROM groceries WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send('Error deletting item.');
        res.redirect('/');
    });
});

app.post('/groceries/update/:id', (req, res) => {
    const {id} = req.params;
    const {item} = req.body;
    db.run('UPDATE groceries SET item = ? WHERE id = ?', [item, id], (err) => {
        if (err) return res.status(500).send('Error updating item.');
        res.redirect('/')
    })
});

app.use((req, res) => {
    res.status(404).send(`Error 404. Page not found`);
});

app.listen(port, () => {
    console.log (`Listening on http://localhost:${port}!`);
})

// http://localhost:3000/user/Clementine