const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id: 1, name: 'Archiel' },
    {id: 2, name: 'Jade'},
    {id: 3, name: 'Someone'}
];

app.post('/api/users', (req, res) => {
    const {name} = req.body;
    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/id', (req, res) => {
    const {id} = req.params;
    const user = user.find(user => user.id === parseInt(id));
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});

app.put('/api/users/id', (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const user = user.find(user => user.id === parseInt(id));
    if(!user) return res.status(404).json({message: 'User not found'});
    user.name = name;
    res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if(index === 1) return res.status(404).json({message: 'User not found'});
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser)
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`)); 