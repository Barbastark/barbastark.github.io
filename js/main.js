const surface1 = document.querySelector('.img1');
const surface2 = document.querySelector('.img2');
const width = surface1.clientWidth;
console.log(width)
console.log(surface1);
setInterval(() => {
  let surface1 = document.querySelector('.img1');
  console.log(surface1.x)
  surface1 = null;
}, 100)


