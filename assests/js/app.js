const cl = console.log;
const movie = document.getElementById("movie")
const icon = document.getElementById("icon")
const close1 = document.getElementById("close")
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const selectcat = [...document.querySelectorAll('.sidebar div')]
const selectall = document.querySelector('.selectall')
const images = document.querySelectorAll(".images img");


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



function onenterhandl(eve){
    images.forEach(i=>{
        if(i!==eve.target){
            i.style.filter ='blur(5px)';
            i.style.transform ="scale(.9)";
            i.style.transition = " all .3s ease-in-out";
        }else{
            i.style.transform = 'scale(1.1)';
            i.style.transition = " all .3s linear";
            
        }
    })
}

function onleavehandl(eve){
    images.forEach(i=>{
        i.style.filter = 'blur(0)';
        i.style.transform = 'scale(1)';
    })
}

close1.addEventListener("click",onclick)
icon.addEventListener("click",onclick)
overlay.addEventListener("click",onclick) 
movie.addEventListener('change',oncatechange)
selectcat.forEach(ele => ele.addEventListener('click',onselect))
selectall.addEventListener('click',forall)


images.forEach(img =>{
    img.addEventListener("mouseenter",onenterhandl)
    img.addEventListener('mouseleave',onleavehandl)
})