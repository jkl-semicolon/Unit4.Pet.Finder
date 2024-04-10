import express from 'express';

const pets = [
  {
    id: 0,
    name: 'mikan',
    owner: 'alex',
  },
  {
    id: 1,
    name: 'little_kitty',
    owner: 'alex',
  },
  {
    id: 2,
    name: 'nevin',
    owner: 'vivian',
  },
  {
    id: 3,
    name: 'jasper',
    owner: 'joyce',
  },
];

const app = express();
const PORT = 5000;

app.get('/',(req,res) => {
  res.sendFile(`/home/jkl/coursework/block31/Unit4.Workshop.Pet.Finder/index.html`)
})

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
})

app.get('/api/v1/pets/owner', (req, res) => {
  let {owner} = req.query;
  res.send(pets.filter(pet => pet.owner === owner.toLowerCase()))
})

app.get('/api/v1/pets/:name', (req, res) => {
  const {name} = req.params;
  res.send(pets.find(pet => pet.name === name));
})

app.listen(PORT, () => console.log('Listening on port ' + PORT + ', over.'));