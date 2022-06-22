const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('I am learning Node !!');
});

const users = [
    {id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888'},
    {id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888'},
    {id: 2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01788888888'},
    {id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888'},
    {id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888'},
    {id: 5, name: 'Sushmita', email: 'Sushmita@gmail.com', phone: '01788888888'},
    {id: 6, name: 'Monika', email: 'Monika@gmail.com', phone: '01788888888'},
]

app.get('/users', (req, res) => {
    // console.log(req.query.search);
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    console.log('hitting the post');
    res.send('post submitted');
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple', 'banana']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yummy Yummy Mangoes !!");
})

app.listen(port, () => {
    console.log('Listening to port ', port);
});