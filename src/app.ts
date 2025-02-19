import express from 'express';

const app = express();
const port = 3000;

const users = [
    { id: 1, nombre: 'juan peres', email: 'juan@ejemplo.com' },
    { id: 2, nombre: 'ana garcia', email: 'ana@ejemplo.com' },
    { id: 3, nombre: 'Carlos lopez', email: 'carlos@ejemplo.com' }
];

app.get('/', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Microservice running on http://localhost:${port}`);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});