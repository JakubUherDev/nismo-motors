(function() {

    "use strict";

    //===== Preloader
    //
    // window.onload = () => {
    // }

    window.addEventListener("load", function(){
        // ....
        const date = localStorage.getItem('expiryDate')
        const today = new Date()

        console.log(date)
        console.log(today)

        if(date) {
            if (date !== today) {
                document.querySelector('.cookie-consent-banner ').classList.add('hide-cookies-consent-message')
            }
        }
    });

    // window.onload = function () {
    //   window.setTimeout(fadeout, 500);
    // }
    //
    // function fadeout() {
    //   document.querySelector('#preloader').style.opacity = '0';
    //   document.querySelector('#preloader').style.display = 'none';
    // }


    // /*=====================================
    // Sticky
    // ======================================= */
    // window.onscroll = function () {
    //     // show or hide the back-top-top button
    //     var backToTop = document.querySelector(".back-to-top");
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         backToTop.style.display = "flex";
    //     } else {
    //         backToTop.style.display = "none";
    //     }
    // };

    // Get the navbar


    // for menu scroll

    if(document.location.href === "https://turborepairs.co.uk/") {
        var pageLink = document.querySelectorAll('.page-scroll');
        pageLink.forEach(elem => {
            elem.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    offsetTop: 1 - 60,
                });
            });
        });
    }



    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);


    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");


    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    // navbarToggler.addEventListener('click', function () {
    //     navbarToggler.classList.toggle("active");
    //     navbarCollapse.classList.toggle('show')
    // })

    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileCloseMenuButton = document.querySelector('.mobile-menu-close-button');
    const sidebar = document.querySelector('.sidebar');
    const navigation = document.querySelector('.navigation');
    const cookieBar = document.querySelector('.cookie-consent-banner');


    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle("-translate-x-full");
        sidebar.classList.toggle("h-full");
        setTimeout(() => {
            document.body.classList.toggle('fixed-position');
        }, 310)
    })

    mobileCloseMenuButton.addEventListener('click', () => {
        document.body.classList.toggle('fixed-position');
        sidebar.classList.toggle("-translate-x-full");
        sidebar.classList.toggle("h-full");
    })

    document.querySelectorAll('.mobile-only-sidebar-button').forEach(e => {
        e.addEventListener('click', () => {
            document.body.classList.toggle('fixed-position');
            sidebar.classList.toggle("-translate-x-full");
        })
    })

    document.querySelectorAll('.cookie-consent-banner-action-btn').forEach(e => {
      e.addEventListener('click', () => {
          cookieBar.classList.toggle('hide-cookies-consent-message')
          console.log('Ive set the cookie')
          localStorage.setItem('expiryDate', new Date(new Date().setFullYear(new Date().getFullYear() + 1)))
      });
    });




    //======== tiny slider for testimonial
    // tns({
    //   container: '.testimonials',
    //   items: 1,
    //   slideBy: 'page',
    //   autoplay: false,
    //   mouseDrag: true,
    //   gutter: 0,
    //   nav: false,
    //   controls: false,
    // });



    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();

})();

