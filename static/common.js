document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 * 2 + 'px';
}, false)

window.onresize = function () {
    setRem()()
}

function setRem() {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 * 2 + 'px';
        }, 1000)
    }

}