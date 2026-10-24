function scrollToSection() {
  document.querySelector('#jogos').scrollIntoView({
    behavior: 'smooth'
  });
}

function toggleGaleria() {
  const galeria = document.querySelector('#fotosMemorias');
  const seta = document.querySelector('#seta');

  galeria.classList.toggle('aberta');
  seta.classList.toggle('girada');
}