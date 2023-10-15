document.querySelector(".console-enlarge").addEventListener("click",function(){
    if(document.querySelector(".bx-window") != null){
        document.querySelector(".bx-window").classList = "bx bx-windows fs-5";
        document.getElementById("console-modal").classList.add("modal-fullscreen");
    }
    else{
        document.querySelector(".bx-windows").classList = "bx bx-window fs-5";
        document.getElementById("console-modal").classList.remove("modal-fullscreen");
    }
});
document.getElementById("MainNavHelp").addEventListener("click",writer,{ once: true });
function writer(){
        const t1 = document.querySelector(".console-typed1");
        if (t1) {
            let e = t1.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed1", {
                strings: e,
                startDelay: 1000,
                typeSpeed: 1,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
        }
        const t2 = document.querySelector(".console-typed2");
        if (t2) {
            let e = t2.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed2", {
                strings: e,
                typeSpeed: 1,
                startDelay: 3000,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
            
        }
        const t3 = document.querySelector(".console-typed3");
        if (t3) {
            let e = t3.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed3", {
                strings: e,
                typeSpeed: 1,
                startDelay: 6000,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
            
        }
        const t4 = document.querySelector(".console-typed4");
        if (t4) {
            let e = t4.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed4", {
                strings: e,
                typeSpeed: 50,
                startDelay: 9000,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
            
        }
        const t5 = document.querySelector(".console-typed5");
        if (t5) {
            let e = t5.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed5", {
                strings: e,
                typeSpeed: 1,
                startDelay: 9500,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
            
        }
        const t6 = document.querySelector(".console-typed6");
        if (t6) {
            let e = t6.getAttribute("data-typed-items");
            e = e.split("#"), new Typed(".console-typed6", {
                strings: e,
                typeSpeed: 1,
                startDelay: 12000,
                loop: false,
                loopCount: Infinity,
                showCursor: false
            })
            
        }
        setTimeout(function(){
            document.querySelector(".console-out1").hidden = false;
            document.querySelector(".console-out2").hidden = false;
            if(document.addEventListener("keydown", function(){
                var myModalEl = document.getElementById('staticBackdrop');
                var modal = bootstrap.Modal.getInstance(myModalEl)
                modal.hide();
            })){

            }
            },14000)
        };
        window.mobileAndTabletCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            if(check == false){
                window.addEventListener("scroll",typer,{ once: true });
                function typer(){
                    let scrollAmount = window.scrollY;
                    if(scrollAmount > 58){
                        const r3 = document.querySelector(".typed3");
                        if (r3) {
                            let e = r3.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed3", {
                                strings: e,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r4 = document.querySelector(".typed4");
                        if (r4) {
                            let e = r4.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed4", {
                                strings: e,
                                startDelay: 2000,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r5 = document.querySelector(".typed5");
                        if (r5) {
                            let e = r5.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed5", {
                                strings: e,
                                startDelay: 5000,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r6 = document.querySelector(".typed6");
                        if (r6) {
                            let e = r6.getAttribute("data-typed-items");
                            e = e.split("*"), new Typed(".typed6", {
                                strings: e,
                                startDelay: 7000,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r7 = document.querySelector(".typed7");
                        if (r7) {
                            let e = r7.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed7", {
                                strings: e,
                                startDelay: 10500,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r8 = document.querySelector(".typed8");
                        if (r8) {
                            let e = r8.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed8", {
                                strings: e,
                                startDelay: 14000,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                        const r9 = document.querySelector(".typed9");
                        if (r9) {
                            let e = r9.getAttribute("data-typed-items");
                            e = e.split("#"), new Typed(".typed9", {
                                strings: e,
                                startDelay: 16500,
                                typeSpeed: 1,
                                loop: false,
                                loopCount: Infinity,
                                showCursor: false
                            })
                        }
                    }
            }
          }else{
            const r3 = document.querySelector(".typed3");
            if (r3) {
                let e = r3.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed3", {
                    strings: e,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r4 = document.querySelector(".typed4");
            if (r4) {
                let e = r4.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed4", {
                    strings: e,
                    startDelay: 2000,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r5 = document.querySelector(".typed5");
            if (r5) {
                let e = r5.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed5", {
                    strings: e,
                    startDelay: 5000,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r6 = document.querySelector(".typed6");
            if (r6) {
                let e = r6.getAttribute("data-typed-items");
                e = e.split("*"), new Typed(".typed6", {
                    strings: e,
                    startDelay: 7000,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r7 = document.querySelector(".typed7");
            if (r7) {
                let e = r7.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed7", {
                    strings: e,
                    startDelay: 10500,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r8 = document.querySelector(".typed8");
            if (r8) {
                let e = r8.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed8", {
                    strings: e,
                    startDelay: 14000,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
            const r9 = document.querySelector(".typed9");
            if (r9) {
                let e = r9.getAttribute("data-typed-items");
                e = e.split("#"), new Typed(".typed9", {
                    strings: e,
                    startDelay: 16500,
                    typeSpeed: 1,
                    loop: false,
                    loopCount: Infinity,
                    showCursor: false
                })
            }
        }
        };
        mobileAndTabletCheck();
! function () {
    "use strict";
    const e = (e, t = !1) => (e = e.trim(), t ? [...document.querySelectorAll(e)] : document.querySelector(e)),
        t = (t, o, i, l = !1) => {
            let s = e(o, l);
            s && (l ? s.forEach((e => e.addEventListener(t, i))) : s.addEventListener(t, i))
        },
        o = (e, t) => {
            e.addEventListener("scroll", t)
        };
    let i = e("#navbar .scrollto", !0);
    const l = () => {
        let t = window.scrollY + 200;
        i.forEach((o => {
            if (!o.hash) return;
            let i = e(o.hash);
            i && (t >= i.offsetTop && t <= i.offsetTop + i.offsetHeight ? o.classList.add("active") : o.classList.remove("active"))
        }))
    };
    window.addEventListener("load", l), o(document, l);
    const s = t => {
        let o = e(t).offsetTop;
        window.scrollTo({
            top: o,
            behavior: "smooth"
        })
    };
    let a = e(".back-to-top");
    if (a) {
        const e = () => {
            window.scrollY > 100 ? a.classList.add("active") : a.classList.remove("active")
        };
        window.addEventListener("load", e), o(document, e)
    }
    t("click", ".mobile-nav-toggle", (function (t) {
        e("body").classList.toggle("mobile-nav-active"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
    })), t("click", ".scrollto", (function (t) {
        if (e(this.hash)) {
            t.preventDefault();
            let o = e("body");
            if (o.classList.contains("mobile-nav-active")) {
                o.classList.remove("mobile-nav-active");
                let t = e(".mobile-nav-toggle");
                t.classList.toggle("bi-list"), t.classList.toggle("bi-x")
            }
            s(this.hash)
        }
    }), !0), window.addEventListener("load", (() => {
        window.location.hash && e(window.location.hash) && s(window.location.hash)
    }));
    let n = e("#preloader");
    n && window.addEventListener("load", (() => {
        n.remove()
    }));
    const r = e(".typed");
    if (r) {
        let e = r.getAttribute("data-typed-items");
        e = e.split(","), new Typed(".typed", {
            strings: e,
            loop: !0,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2e3,
            showCursor: false
        })
    }
    const r2 = e(".typed2");
    if (r2) {
        let e = r2.getAttribute("data-typed-items");
        e = e.split(","), new Typed(".typed2", {
            strings: e,
            loop: !0,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2e3
        })
    }
    let c = e(".skills-content");
    c && new Waypoint({
        element: c,
        offset: "80%",
        handler: function (t) {
            e(".progress .progress-bar", !0).forEach((e => {
                e.style.width = e.getAttribute("aria-valuenow") + "%"
            }))
        }
    }), window.addEventListener("load", (() => {
        let o = e(".portfolio-container");
        if (o) {
            let i = new Isotope(o, {
                    itemSelector: ".portfolio-item"
                }),
                l = e("#portfolio-flters li", !0);
            t("click", "#portfolio-flters li", (function (e) {
                e.preventDefault(), l.forEach((function (e) {
                    e.classList.remove("filter-active")
                })), this.classList.add("filter-active"), i.arrange({
                    filter: this.getAttribute("data-filter")
                }), i.on("arrangeComplete", (function () {
                    AOS.refresh()
                }))
            }), !0)
        }
    }));
    GLightbox({
        selector: ".portfolio-lightbox"
    }), GLightbox({
        selector: ".portfolio-details-lightbox",
        width: "90%",
        height: "90vh"
    });
    new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        }
    }), new Swiper(".testimonials-slider", {
        speed: 600,
        loop: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        }
    }), window.addEventListener("load", (() => {
        AOS.init({
            duration: 1e3,
            easing: "ease-in-out",
            once: !0,
            mirror: !1
        })
    })), new PureCounter
}();