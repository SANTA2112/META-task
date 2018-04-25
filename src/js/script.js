const search = document.getElementById("search");
const modal = document.getElementsByClassName("modal-search")[0];
const colorCircles = document.querySelectorAll('.devices__colorCircle');
const devicesBlocks = document.querySelectorAll('.devices__device');

search.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "flex";
});

modal.addEventListener('submit', (e) => {
  e.preventDefault();
  const URL = 'https://www.google.ru/search?newwindow=1&source=hp&ei=o-jgWq3OI8ONkwWc1IKgBg&oq=hello&gs_l=psy-ab.3..0i203k1l10.893.3977.0.4226.16.14.0.0.0.0.207.1280.0j6j1.8.0....0...1c.1.64.psy-ab..10.6.1159.6..0j0i10i203k1j0i10k1j35i39k1j0i67k1.267.Lrq2YOxr0j4';
  const searchQuery = e.target.elements.search.value;
  location.href = URL + '&q=' + searchQuery;
});

modal.addEventListener("click", e => {
  e.stopPropagation()
  if(e.target === e.currentTarget) modal.style.display = "";
});

devicesBlocks.forEach(link => link.onclick = e => !e.target.matches('.devices__colorCircle'))

Array.from(colorCircles).forEach(circle => {
  const changeModel = (e) => {
    // e.stopPropagation();
    console.log(e.stopPropagation)
    const parent = e.target.closest('.devices__device');
    const priceBlock = parent.querySelector('.devices__price');
    const colorBlock = parent.querySelector('.devices__color');
    const imageBlock = parent.querySelector('.devices__img');
    const { image, color, price } = e.target.dataset;
    priceBlock.textContent = price;
    colorBlock.textContent = color;
    imageBlock.style.backgroundImage = `url(${image})`;
  }
  circle.addEventListener('click', changeModel);
  circle.addEventListener('mouseover', changeModel);
});
