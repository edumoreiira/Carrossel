function slider() {

    const imagesWrapper = document.querySelector('[data-slide="img-wrapper"]')
    let sliderImages = document.querySelectorAll('[data-slide="img"]')
    const previousSlideBtn = document.querySelector('[data-slide="slider-previous-btn"]')
    const nextSlideBtn = document.querySelector('[data-slide="slider-next-btn"]')
    const controlBtns = document.querySelectorAll('[data-slide="control-btn"]')
    var imgWidth = sliderImages[0].offsetWidth

    const state = {
        currentPosition: 0,
        savedPosition: -imgWidth,
        currentSlideIndex: 0,
        movement: 0,

    }

    function animateSlide({ condition }) {
        if (condition) imagesWrapper.style.transition = "transform 300ms ease-in-out"
        else imagesWrapper.style.transition = "none"
    }

    function moveSlide({ position }) {
        var movement = -100 * (position)

        imagesWrapper.style.transform = `translateX( ${movement}% )`
    }

    function setSlide({ index, animate }) {
        if (index === sliderImages.length || index === -1) index = state.currentSlideIndex
        imgWidth = sliderImages[0].offsetWidth
        animateSlide({ condition: animate })


        state.currentSlideIndex = index
        activeControlBtns()
        moveSlide({ position: index })
    }

    function nextSlide() {
        setSlide({ index: state.currentSlideIndex + 1, animate: true })
        state.savedPosition = (-imgWidth) * state.currentSlideIndex
    }

    function previousSlide() {
        setSlide({ index: state.currentSlideIndex - 1, animate: true })
        state.savedPosition = (-imgWidth) * state.currentSlideIndex
    }






    //control-buttons
    controlBtns.forEach((btn, number) => {
        btn.addEventListener("click", () => {
            setSlide({ index: number + 1, animate: true })
        })
    })

    function activeControlBtns() {
        const controlButton = controlBtns[state.currentSlideIndex - 1]
        controlBtns.forEach((e) => e.classList.remove("active"))
        if (controlButton) controlButton.classList.add("active")
    }

    //slide-clone
    function cloneSlides() {
        const firstpic = sliderImages[0].cloneNode(true)
        firstpic.classList.add("slide-cloned")

        const lastpic = sliderImages[sliderImages.length - 1].cloneNode(true)
        lastpic.classList.add("slide-cloned")

        imagesWrapper.append(firstpic)
        imagesWrapper.prepend(lastpic)

        sliderImages = document.querySelectorAll('[data-slide="img"]')
    }

    cloneSlides()


    //transitionend

    function onTransitionEnd() {
        if (state.currentSlideIndex === 0) {
            setSlide({ index: (sliderImages.length - 2), animate: false })
            state.savedPosition = (-imgWidth) * state.currentSlideIndex
        } else if (state.currentSlideIndex === sliderImages.length - 1) {
            setSlide({ index: (1), animate: false })
            state.savedPosition = (-imgWidth) * state.currentSlideIndex
        }
    }


    //mouseFunctions

    function onMouseDown({ image, index, event }) {
        state.movement = 0;
        state.firstPosition = event.clientX
        console.log(state.currentSlideIndex)
        state.currentPosition = event.clientX - state.savedPosition

        if (state.currentSlideIndex != 0 && state.currentSlideIndex != (sliderImages.length - 1)) {      image.addEventListener("mousemove", onMouseMove)
            image.addEventListener("mousemove", onMouseMove)
        }
    }

    function onMouseMove() {
        animateSlide(false)
        state.movement = event.clientX - state.firstPosition
        const position = event.clientX - state.currentPosition
        imagesWrapper.style.transform = `translateX( ${position}px )`
        state.savedPosition = position
    }

    function onMouseUp({ image, index, event }) {
        if (state.movement < -100) {
            nextSlide()

        } else if (state.movement > 100) {
            previousSlide()
        } else {
            setSlide({ index: index, animate: true })
            state.savedPosition = (-imgWidth) * state.currentSlideIndex
        }


        sliderImages.forEach((img) => {
            img.removeEventListener("mousemove", onMouseMove)
        })
    }







    //LISTENERS

    sliderImages.forEach(function (image, index) {

        image.addEventListener("dragstart", (event) => {
            event.preventDefault();
        })

        image.addEventListener("mousedown", (event) => {
            onMouseDown({ image, index, event })
        })

        image.addEventListener("mouseup", (event) => {
            onMouseUp({ image, index, event })
        })
    })

    imagesWrapper.addEventListener("transitionend", onTransitionEnd)
    nextSlideBtn.addEventListener("click", nextSlide)
    previousSlideBtn.addEventListener("click", previousSlide)


    setSlide({ index: 1, animate: false })

}

slider();