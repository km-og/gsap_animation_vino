window.addEventListener("DOMContentLoaded", () => {
  anim();
});

function anim() {
  const mediaAnimation = gsap.matchMedia();
  mediaAnimation.add("(min-width: 1025px)", () => {
    gsap.set(".header", {
      height: "100vh",
    });

    gsap.set(".preview__bg", {
      yPercent: 10,
      scale: 1.2,
    });

    const tlHeader = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
    tlHeader
      .from(".header__logo img", {
        duration: 0.5,
        autoAlpha: 0, //visibility: inherit; opacity: 1
        yPercent: -100,
        stagger: 0.2,
      })
      .to(".header", {
        duration: 0.7,
        height: "auto",
        delay: 0.3,
      })
      .to(
        ".header__logo",
        {
          duration: 0.7,
          scale: 1,
        },
        "<"
      )
      .from(
        ".preview",
        {
          autoAlpha: 0,
          duration: 1.3,
        },
        "<"
      )
      .from(
        ".promo__title",
        {
          duration: 1.3,
          autoAlpha: 0,
          yPercent: 50,
        },
        "-=0.8"
      )
      .from(
        ".promo__img",
        {
          autoAlpha: 0,
          yPercent: 50,
        },
        "<"
      );

    gsap.set(".promo__title", {
      opacity: 1,
    });

    gsap.to(".preview__bg", {
      yPercent: -10,
      scrollTrigger: {
        trigger: ".preview",
        start: "top 150px",
        end: "bottom top",
        scrub: 1,
      },
    });

    const tlTitles = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__info",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
    tlTitles
      .to(".promo__title", {
        opacity: 0.1,
      })
      .from(
        ".promo__info",
        {
          opacity: 0.1,
        },
        "<"
      );

    gsap.set(".promo__left-inner", {
      yPercent: 120,
    });

    const tlPromo = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__wrap",
        start: "top: top",
        end: "bottom+=100%",
        scrub: true,
        pin: true,
      },
    });
    tlPromo
      .to(".promo__left-inner", {
        yPercent: 0,
      })
      .to(
        ".promo__img",
        {
          y: "-100vh",
        },
        "<"
      );

    const tlFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: ".features__wrap",
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    });
    tlFeatures
      .to(".features__title", {
        opacity: 0.1,
      })
      .from(
        ".features__item",
        {
          opacity: 0,
          yPercent: "random([20, 30, 40])", //произвольный порядок для элементов, можно для любого свойства
          stagger: {
            from: "center",
            each: 0.1,
          },
        },
        "<"
      );

    gsap.set(".tradition", {
      background: "#100F0D",
    });
    gsap.set(".tradition__title", {
      color: "#EDEAE2",
    });

    const tlBg = gsap.timeline({
      scrollTrigger: {
        trigger: ".tradition",
        start: "top center",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });
    tlBg
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".features__name",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".tradition",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".tradition__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    gsap.set(".parallax img", {
      scale: 1.3,
      yPercent: 15,
    });

    const parallaxBlocks = document.querySelectorAll(".parallax");
    parallaxBlocks.forEach((block) => {
      const img = block.querySelector("img");
      gsap.to(img, {
        yPercent: -15,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    const tlCountry = gsap.timeline({
      scrollTrigger: {
        trigger: ".country__right",
        start: "top 40%",
        end: "top 5%",
        scrub: true,
      },
    });

    tlCountry
      .to(".country__title", {
        opacity: 0.1,
      })
      .from(
        ".country__right",
        {
          opacity: 0.1,
        },
        "<"
      );

    gsap.set(".story", {
      background: "#100F0D",
    });
    gsap.set(".story__title", {
      color: "#EDEAE2",
    });

    const tlStory = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top center",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });
    tlStory
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".country__right",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".story",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".story__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    const sections = gsap.utils.toArray(".slider__slide");
    gsap.set(".slider__text", {
      opacity: 0.1,
    });
    const horisontal = gsap.to(".slider__wrapper", {
      xPercent: -100 * (sections.length - 1),
      ease: "none", //это важная строка, без нее containerAnimation не будет работать
      scrollTrigger: {
        trigger: ".slider__wrapper",
        start: "top top",
        end: `+=${sections.length * 1000}`,
        //   end: () => "+=" + document.querySelector(".slider__wrapper").offsetWidth, // аналог
        pin: true,
        scrub: true,
      },
    });

    //появление заголовков в горизонтальном скролле
    document.querySelectorAll(".slider__text").forEach((item, index) => {
      if (index != 0) {
        gsap.to(item, {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: "left 60%",
            //left = item, 60% of window
            end: "+=500px",
            scrub: 1,
            containerAnimation: horisontal,
          },
        });
      } else {
        gsap.to(item, {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".slider__wrapper",
            start: "top top",
            toggleActions: "play reverse play reverse",
          },
        });
      }
    });

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "90% bottom",
      },
    });
    tlFooter
      .from(".footer__bottom", {
        autoAlpha: 0,
      })
      .from(".footer__logo", {
        autoAlpha: 0,
        scale: 0.6,
        ease: "bounce.out",
        duration: 1,
      });
  });

  mediaAnimation.add("(max-width: 1024px)", () => {
    gsap.set(".header", {
      height: "100vh",
    });

    gsap.set(".preview__bg", {
      yPercent: 10,
      scale: 1.2,
    });

    const tlHeader = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
    tlHeader
      .from(".header__logo img", {
        duration: 0.5,
        autoAlpha: 0, //visibility: inherit; opacity: 1
        yPercent: -100,
        stagger: 0.2,
      })
      .to(".header", {
        duration: 0.7,
        height: "auto",
        delay: 0.3,
      })
      .from(
        ".preview",
        {
          autoAlpha: 0,
          duration: 1.3,
        },
        "<"
      )
      .from(
        ".promo__title",
        {
          duration: 1.3,
          autoAlpha: 0,
          yPercent: 50,
        },
        "-=0.8"
      );

    gsap.set(".promo__title", {
      opacity: 1,
    });

    gsap.to(".preview__bg", {
      yPercent: -10,
      scrollTrigger: {
        trigger: ".preview",
        start: "top 150px",
        end: "bottom top",
        scrub: 1,
      },
    });

    const tlTitles = gsap.timeline({
      scrollTrigger: {
        trigger: ".promo__info",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
    tlTitles
      .to(".promo__title", {
        opacity: 0.1,
      })
      .from(
        ".promo__info",
        {
          opacity: 0.1,
        },
        "<"
      );
    const opacityTitles = document.querySelectorAll(".opacity-title");
    opacityTitles.forEach((item) => {
      gsap.to(item, {
        opacity: 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 15%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    });

    const items = document.querySelectorAll(".features__item");
    items.forEach((item) => {
      gsap.from(
        item,
        {
          opacity: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
          },
        },
        "<"
      );
    });

    gsap.set(".tradition", {
      background: "#100F0D",
    });
    gsap.set(".tradition__title", {
      color: "#EDEAE2",
    });

    const tlBg = gsap.timeline({
      scrollTrigger: {
        trigger: ".tradition",
        start: "top 35%",
        end: "90% bottom",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });
    tlBg
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".features__name",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".tradition",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".tradition__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    gsap.set(".parallax img", {
      scale: 1.3,
      yPercent: 15,
    });

    const parallaxBlocks = document.querySelectorAll(".parallax");
    parallaxBlocks.forEach((block) => {
      const img = block.querySelector("img");
      gsap.to(img, {
        yPercent: -15,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    const tlCountry = gsap.timeline({
      scrollTrigger: {
        trigger: ".country__right",
        start: "top 40%",
        end: "top 5%",
        scrub: true,
      },
    });

    tlCountry
      .to(".country__title", {
        opacity: 0.1,
      })
      .from(
        ".country__right",
        {
          opacity: 0.1,
        },
        "<"
      );

    gsap.set(".story", {
      background: "#100F0D",
    });
    gsap.set(".story__title", {
      color: "#EDEAE2",
    });

    const tlStory = gsap.timeline({
      scrollTrigger: {
        trigger: ".story",
        start: "top center",
        end: "bottom 50%",
        duration: 0.7,
        toggleActions: "play reverse play reverse",
      },
    });
    tlStory
      .to("body", {
        background: "#EDEAE2",
      })
      .to(
        ".country__right",
        {
          color: "#BB9930",
        },
        "<"
      )
      .to(
        ".story",
        {
          background: "#EDEAE2",
        },
        "<"
      )
      .to(
        ".story__title",
        {
          color: "#BB9930",
        },
        "<"
      );

    //здесь реализовать слайдер
    //   const swiper = new Swiper(".swiper", {
    //     loop: true, //бесконечная прокрутка
    //     autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: false,
    //     },
    //     breakpoints: {
    //       320: {
    //         slidesPerView: 1.1,
    //         spaceBetween: 20,
    //         centeredSlides: false,
    //       },
    //       450: {
    //         slidesPerView: 1.4,
    //         spaceBetween: 30,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //       },
    //     },
    //   });

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "90% bottom",
      },
    });
    tlFooter
      .from(".footer__bottom", {
        autoAlpha: 0,
      })
      .from(".footer__logo", {
        autoAlpha: 0,
        scale: 0.6,
        ease: "bounce.out",
        duration: 1,
      });
  });
}
