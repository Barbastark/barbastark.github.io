(function() {
  const root = document.querySelector(":root");
        root.setAttribute('style', 'font-size:10px;');
  let fontSize = 10;
  let min = 1;
  let max = 55;

  document.onwheel = (e) => {
    if (fontSize <= min) {
      fontSize = min + 1;
    } else if (fontSize >= max) {
      fontSize = max - 1;
    } else {
      fontSize = e.deltaY < 0 ? fontSize += 1 : fontSize -= 1; 
      root.style.fontSize = `${fontSize}px`;
    }
    
  };
})();




