const cl = console.log;
const movie = document.getElementById("movie")


function oncolorchange(e){
    let selectmovie = e.target.value

    const all = [...document.querySelectorAll('.all')]

    all.forEach(ele => ele.classList.add('d-none'))

    const movieselect =[...document.querySelectorAll('.' + selectmovie)]

    movieselect.forEach(ele => ele.classList.remove('d-none'))

    
}









movie.addEventListener('change',oncolorchange)




