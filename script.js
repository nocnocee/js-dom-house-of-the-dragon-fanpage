const bioButtons = document.querySelectorAll('.bio-btn');
const statusButtons = document.querySelectorAll('.status-btn');
const searchInput = document.querySelector('#search-input');

const characters = [
  { name: 'Rhaenyra Targaryen', bio: 'Rhaenyra was the eldest child of King Viserys I Targaryen.', status: 'dead' },
  { name: 'Alicent Hightower', bio: 'Alicent is the daughter of Lord Leyton Hightower.', status: 'alive' },
  { name: 'King Viserys', bio: 'Viserys I Targaryen was the first King of his name to sit on the Iron Throne and the fifth king of the Targaryen dynasty to rule the Seven Kingdoms..', status: 'dead' },
  { name: 'Daemon Targaryen', bio: 'Daemon was a renowned warrior skilled in the joust, hunting, and swordplay.', status: 'alive' },
  { name: 'Laenor Velaryon', bio: 'Laenor Velaryon was the only son of Lord Corlys Velaryon and Princess Rhaenys Targaryen.', status: 'alive' },
  { name: 'Laena Velaryon', bio: 'Laena Velaryon was the eldest child and only daughter of Lord Corlys Velaryon and Princess Rhaenys Targaryen.', status: 'alive' },
];

bioButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const bioParagraph = button.parentElement.querySelector('.bio');
    bioParagraph.textContent = characters[index].bio;
    bioParagraph.style.display = 'block';
  });
});

statusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const statusParagraph = button.parentElement.querySelector('.status');
    statusParagraph.textContent = characters[index].status === 'alive' ? 'Still alive' : 'Dead';
    statusParagraph.style.display = 'block';
  });
});

searchInput.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const