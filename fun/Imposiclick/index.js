//Create id for our button called main
const main = document.getElementById('main')

//make a function that radomizes the buttons placement
function placement() {
    //define our window and the place the button can go
    var maxX = window.innerWidth -
     main.offsetWidth
    var maxY = window.innerHeight - main.offsetHeight

    //creates random location
    var randomX = Math.floor(Math.random() * maxX)
    var randomY = Math.floor(Math.random() * maxY)

    //place button
    main.style.left = randomX + 'px'
    main.style.top = randomY + 'px'
}

function click() {
    alert('You clicked me!')
}

//add event listener to the button
main.addEventListener('mouseover', placement)
main.addEventListener('click', click)