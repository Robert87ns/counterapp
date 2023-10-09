let kiss = document.getElementById("kiss")
let numKiss = document.getElementById("kiss-num")

count = 0

function addKiss() {
    count += 1
    kiss.textContent = count + "🏀"
}

function save() {
    numKiss.textContent += count + "🏀" + " - " 
    count = 0
    kiss.textContent = count
}