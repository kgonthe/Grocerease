const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,`index.html`));
});

app.get('/about', (req, res) => {
    res.send(`<h1> This is the about page for Grocerease</h1> <p>This is a grocery list management app. </p>`)
});

app.get('/user/:username', (req, res) => {
    const username= req.params.username;
    res.send(`<h1> Welcome, ${username}! </h1> <p>Check out your profile. </p>`)
})

app.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname,`form.html`));
});
app.post('/submitted', (req, res) => {
    const groceryitem = req.body.item;  
    res.send(`<h1>Item Submitted</h1> <p>Yay! You submitted: ${groceryitem} to the list. </p>`);
});

app.use((req, res) => {
    res.status(404).send(`Error 404. Page not found`);
});

const port=3000;
app.listen(3000, () => {
    console.log (`Listening on http://localhost:${port}!`)
})

// http://localhost:3000/user/Clementine