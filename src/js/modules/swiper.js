module.exports = function () {

  const logosSlider = new Swiper('#logos-slider', {
    spaceBetween: 20,
    grabCursor: false,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    loop: true,
    speed: 4000,
    mousewheelControl: false,
    keyboardControl: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true
    },
  });

  const secondSlider = new Swiper('#second-slider', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      600: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1025: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 80,
        slidesPerView: 3,
      }
    }
  });



  //******************************
    //***** TEMP SLIDERS *************
    //******************************

    const blogSlider = new Swiper('.blog-slider', {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 20,
      slidesPerView: 1.1,
      breakpoints: {
        769: {
          spaceBetween: 20,
          slidesPerView: 2.3,
        },
        1025: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        1400: {
          spaceBetween: 30,
          slidesPerView: 4,
        }
      }
    });

    const docSlider = new Swiper('.doc-slider', {
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 20,
      slidesPerView: 1.1,
      breakpoints: {
        769: {
          spaceBetween: 20,
          slidesPerView: 2.3,
        },
        1025: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        1400: {
          spaceBetween: 30,
          slidesPerView: 4,
        }
      }
    });

    const shopTop = new Swiper('.shop-top-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 10,
      slidesPerView: 1.02,
      breakpoints: {
        769: {
          spaceBetween: 10,
          slidesPerView: 2.3,
        },
        1025: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        1400: {
          spaceBetween: 15,
          slidesPerView: 4,
        }
      }
    });

    const capabilitiesSlider = new Swiper('.capabilities-slider', {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      spaceBetween: 20,
      slidesPerView: 1,
      breakpoints: {
        600: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        769: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1025: {
          spaceBetween: 20,
          slidesPerView: 4,
        }
      }
    });

    const shopProductThumb = new Swiper(".shop-product__slider--thumb", {
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      direction: "vertical",
      watchSlidesProgress: true,
    });
    const shopProductMain = new Swiper(".shop-product__slider--main", {
      thumbs: {
        swiper: shopProductThumb,
      },
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
      spaceBetween: 20,
      grabCursor: false,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeMomentum: false,
      loop: true,
      speed: 4000,
      mousewheelControl: false,
      keyboardControl: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
    });

    const trustedSlider = new Swiper('.trusted-slider', {
      spaceBetween: 20,
      grabCursor: true,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeMomentum: false,
      loop: true,
      speed: 4000,
      mousewheelControl: true,
      keyboardControl: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
    });

    const howItWorksSlider = new Swiper('.how-it-works-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
      slidesPerView: 1.1,
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
        // sensitivity:10,
        // thresholdDelta:10,
        // thresholdTime:10,
      },
      breakpoints: {
        769: {
          direction: 'vertical',
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          spaceBetween: 0,
          slidesPerView: 1,
          // mousewheel: true,
        }
      }
    });

    const guaranteesThumb = new Swiper(".our-guarantees__tabs", {
      // spaceBetween: 8,
      slidesPerView: 4,
      direction: "vertical",
      speed: 2000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true
      },
    });
    const guaranteesSlider = new Swiper('.our-guarantees-slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      effect: 'fade',
      speed: 500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true
      },
      thumbs: {
        swiper: guaranteesThumb,
      },
    });
};