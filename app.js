
let cursor = document.querySelector('.cursor')
// let img = document.querySelector('main img')
let navLinks = document.querySelectorAll('.links li a')

window.addEventListener('mousemove', function (e) {
    // we have to use clientY & clientX instead of pageY, pageX for scroll
    cursor.style.top = e.clientY + 'px'
    cursor.style.left = e.clientX + 'px'
})

navLinks.forEach( link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
    
    link.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
})

// image scale
// img.addEventListener('mouseover', () => {
//     img.classList.add('img-hover')
// })

// img.addEventListener('mouseleave', () => {
//     img.classList.remove('img-hover')
// })