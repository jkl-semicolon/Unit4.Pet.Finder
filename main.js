const $container = document.querySelector('#container');

const $button = document.querySelector('#button');

$button.addEventListener('click', () => {
  listPets();
})

const listPets = async () => {
  const response = await fetch('localhost:5000/api/v1/pets');
  const json = response.json();
  console.log(json);
}