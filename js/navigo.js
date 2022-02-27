function navigo() {
    const menu = document.querySelector('.menu');
    const menuheight = menu.clientHeight;
    document.addEventListener('scroll', onScroll, {
        passive: true
    });

    function onScroll() {
        const scrollposition = scrollY;
        const nav = document.querySelector('nav');
        if (menuheight <= scrollposition) {
            nav.classList.add('fix')
        } else {
            nav.classList.remove('fix');
        }
    }

}
navigo()

/* @keyframes down {
    0% {
        transform: translateY(-50px)
    }

    100% {
        transform: translateY(0px)
    }
} */