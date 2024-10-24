function $(id) {
  if (typeof id == 'string') {
    return document.getElementById(id)
  }
  return id
}
const clicker__count = $(clicker__counter)
console.log(clicker__count.textContent)

const img = $("cookie");
let i=1;
img.onclick = function() {
    clicker__count.textContent = Number(clicker__count.textContent) +1;
    img.width = img.width + 20*i;
    i *= -1;
}