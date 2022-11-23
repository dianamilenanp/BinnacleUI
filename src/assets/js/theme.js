"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* ===============================================================
		HERO SLIDER
	=============================================================== */
    var heroSlider = new Swiper(".hero-slider", {
        autoPlay: true,
        loop: true,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /* ===============================================================
		DISHES SLIDER
	=============================================================== */
    var dishesSlider = new Swiper(".dishes-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* ===============================================================
		FORMATTING PRICES
	=============================================================== */
    function formatPrice(number) {
        let newNumber = Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
        }).format(number / 100);
        return newNumber;
    }

    document.querySelectorAll(".price-formatted").forEach((el) => {
        el.textContent = formatPrice(parseInt(el.textContent));
    });

    /* ===============================================================
		GLIGHTBOX
	=============================================================== */
    const lightbox = GLightbox({
        touchNavigation: true,
    });

    /* =====================================================
		BOOTSTRAP SCROLLSPY
	===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });

    /* ===============================================================
		DATEPICKER
	=============================================================== */
    new AirDatepicker("#resDate", {
        timepicker: true,
    });

    /* =====================================================
		SCROLL TOP BUTTON
	===================================================== */
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 1000) {
            document.getElementById("scrollTopBtn").classList.add("active");
        } else {
            document.getElementById("scrollTopBtn").classList.remove("active");
        }
    });

    /* =====================================================
		SCROLL TOP BUTTON
	===================================================== */
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 1000) {
            document.getElementById("scrollTopBtn").classList.add("active");
        } else {
            document.getElementById("scrollTopBtn").classList.remove("active");
        }

        if (window.pageYOffset >= 5) {
            document.getElementById("navbar").classList.add("active");
        } else {
            document.getElementById("navbar").classList.remove("active");
        }
    });

    document
        .getElementById("scrollTopBtn")
        .addEventListener("click", function () {
            window.scrollTo(0, 0);
        });

    document.querySelectorAll(".form-control").forEach((el) => {
        el.addEventListener("focus", function () {
            el.classList.add("is-focus");
            el.previousElementSibling.classList.add("is-focus");
        });
        el.addEventListener("blur", function () {
            el.classList.remove("is-focus");
            el.previousElementSibling.classList.remove("is-focus");
        });
    });
});
