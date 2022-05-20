window.onload = function () {
    let counter = 0
    document.querySelector('#next').addEventListener('click', () => changeStyle(++counter))
    document.querySelector('#prev').addEventListener('click', () => changeStyle(--counter))
    document.querySelector('#reset').addEventListener('click', () => changeStyle(counter = 0))

    function changeStyle() {
        if (counter >= 0 && counter < 8) {
            let currentClassName = document.querySelector('#img1').className
            document.querySelector('#img1').classList.remove(currentClassName)
            let className = currentClassName
            className = className.slice(0, 5) + counter
            document.querySelector('#img1').classList.add(className)
        }
        if (counter > 7 || counter < 0) {
            counter = -1
        }
    }
}


