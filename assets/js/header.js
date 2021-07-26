let animado = document.querySelector(".animado"):
    function header() {
        let scrollTop = document.documentElement.scrollTop;
        let alturaAnimado = animado.offsetTop;
        if (alturaAnimado - 500 < scrollTop) {
            animado.style.opacity = 1;
        }
    }



window.addEventListener('scroll', header);