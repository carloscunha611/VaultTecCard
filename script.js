let isFront = true
let isVisible = true
function flipCard(event) {
  const card = event.currentTarget
  const infos = document.querySelector('.info')
  const photo = document.querySelector('img')
  const bg = isFront ? 'Back' : 'Front'
  const display = isVisible ? 'none' : 'grid'
  isVisible = !isVisible
  isFront = !isFront
  card.style.backgroundImage = `url(./assets/card-${bg}.png)`
  infos.style.display = `${display}`
  photo.style.display = `${display}`
}
