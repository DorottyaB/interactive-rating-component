let rating = 0;

document.querySelectorAll('input[type="radio"]').forEach(btn =>
  btn.addEventListener('change', () => {
    rating = btn.value;
  })
);

document.querySelector('.btn-submit').addEventListener('click', () => {
  document.querySelector('.main').classList.add('hidden');
  document.querySelector('.centered').classList.remove('hidden');
  document.getElementById('your-rating').textContent = rating;
});
