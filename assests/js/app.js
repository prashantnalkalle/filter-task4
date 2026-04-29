const cl = console.log;
const movie = document.getElementById("movie")
const icon = document.getElementById("icon")
const close1 = document.getElementById("close")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const selectcat = [...document.querySelectorAll('.sidebar div')]
const selectall = document.querySelector('.selectall')

function oncatechange(e){
    let selectmovie = e.target.value
   

    const all = [...document.querySelectorAll('.all')]

    all.forEach(ele => ele.classList.add('d-none'))

    const movieselect =[...document.querySelectorAll('.' + selectmovie)]

    movieselect.forEach(ele => ele.classList.remove('d-none'))

    
}

function onclick(){
    sidebar.classList.toggle("active")
    overlay.classList.toggle("active")
}

function onselect(e){
    let val = e.target.className
    // cl(val)
    const all =[...document.querySelectorAll('.all')]
    all.forEach(ele => ele.classList.add('d-none'))

    const movieselect =[...document.querySelectorAll('.' + val)]
    movieselect.forEach(ele => ele.classList.remove('d-none'))
    onclick();
    // sidebar.classList.toggle("active")
    // overlay.classList.toggle("active")
}

function forall(){
     const all =[...document.querySelectorAll('.all')]
    all.forEach(ele => ele.classList.remove('d-none'))
}
close1.addEventListener("click",onclick)
icon.addEventListener("click",onclick)
overlay.addEventListener("click",onclick) 
movie.addEventListener('change',oncatechange)
selectcat.forEach(ele => ele.addEventListener('click',onselect))
selectall.addEventListener('click',forall)
