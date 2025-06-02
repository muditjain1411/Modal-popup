const modalOpen = document.getElementById("modalOpen")
const modalClose = document.getElementById("modalClose")
const modal = document.getElementById("modal")

modalOpen.onclick = function(){
    modal.style.display = "block"
}
modalClose.onclick = function(){
    modal.style.display = "none"
}