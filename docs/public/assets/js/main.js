((d) => {
    const $btnMenuOpen = d.querySelector('.menu-open'),
        $btnMenuClose = d.querySelector('.menu-close')

    $btnMenuOpen.addEventListener("click", (e) => {
        $btnMenuOpen.classList.toggle("none")
        $btnMenuClose.classList.toggle("none")
    })

    $btnMenuClose.addEventListener("click", (e) => {
        $btnMenuOpen.classList.toggle("none")
        $btnMenuClose.classList.toggle("none")
    })
})(document);
