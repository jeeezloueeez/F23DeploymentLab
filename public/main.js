const buyBtn = document.getElementsByClassName('buyBtn')
const duckPic = document.getElementById('duck-pic')
console.log(buyBtn)

buttonChange = (evt) => {
  evt.target.style.backgroundColor = 'blue'
  evt.target.style.color = 'white'
  evt.target.style.transition = '.2s'
}

buttonRevert = (evt) => {
  evt.target.style.backgroundColor = ''
  evt.target.style.color = ''
  evt.target.style.transition = '.4s'
}

imageChange = (evt) => {
  evt.target.style.backgroundColor = 'red'
}

imageRevert = (evt) => {
  evt.target.style.backgroundColor = 'blue'
}

for (let i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener('mouseover', buttonChange)
  buyBtn[i].addEventListener('mouseout', buttonRevert)
}

// buyBtn.item().forEach(el => el.addEventListener('mouseover', buttonChange))
// buyBtn.item().forEach(el => el.addEventListener('mouseout', buttonRevert))


duckPic.addEventListener('mouseover', imageChange)
duckPic.addEventListener('mouseout', imageRevert)