function initWaterFall(container, child) {
  const Journal = document.querySelector(container);
  const allArticles = document.querySelectorAll(child);
  if (!allArticles[0]) return;

  programming()

  window.addEventListener('resize', () => programming())

  function programming() {
    Journal.style.display = 'block'
    Journal.style.opacity = '0'
    allArticles.forEach(val => val.style.gridRow = `span ${Math.ceil(val.offsetHeight)}`)
    Journal.style.display = 'grid'
    Journal.style.opacity = '1'
  }
}

initWaterFall('.Journal > div', '.Journal > div > article,.FrontPage ')
