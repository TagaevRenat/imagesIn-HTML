let counter = 0
const btn = document.querySelector('#countainer')
btn.addEventListener('click', event => {
    if (event.target.id === 'next' && counter < 7) {
        ++counter
        changeStyle()
    }
    if (event.target.id === 'prev' && counter > 0) {
        --counter
        changeStyle()
    }
    if (event.target.id === 'reset') {
        counter = 0
        changeStyle()
    }
})
function changeStyle() {
    if (counter < 8) {
        let currentClassName = document.querySelector('#img1').className
        document.querySelector('#img1').classList.remove(currentClassName)
        let className = currentClassName
        className = className.slice(0, 5) + counter
        document.querySelector('#img1').classList.add(className)
    }
}


