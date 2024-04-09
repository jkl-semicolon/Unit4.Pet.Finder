const pets = [
  {
    id: 0,
    name: 'Mikan',
    owner: 'Alex',
  },
  {
    id: 1,
    name: 'Little_Kitty',
    owner: 'Alex',
  },
  {
    id: 2,
    name: 'Nevin',
    owner: 'Vivian',
  },
  {
    id: 3,
    name: 'Jasper',
    owner: 'Joyce',
  },
];

const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res) => {
  res.sendFile(`/home/jkl/coursework/block31/Unit4.Workshop.Pet.Finder/index.html`)
})

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
})

app.get('/api/v1/pets/owner', (req, res) => {
  const {owner} = req.query;
  res.send(pets.filter(pet => pet.owner === owner))
})

app.get('/api/v1/pets/:name', (req, res) => {
  const {name} = req.params;
  res.send(pets.find(pet => pet.name === name));
})

app.listen(PORT, () => console.log('Listening on port ' + PORT + ', over.'));