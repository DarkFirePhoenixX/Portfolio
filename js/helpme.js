"use strict";
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
setTimeout(function(){
    var newElement = document.createElement("img");
newElement.classList = 'hello img-responsive';
newElement.src = 'images/hello.png';
var parent = document.querySelector(".myself");
insertAfter(parent, newElement);
},1200),
document.onkeydown = function () {
    return false;
    }, document.addEventListener("DOMContentLoaded", (() => {
        let t = document.title;
        window.addEventListener("blur", (t => {
            document.title = "Hey, come back 😢"
        })), window.addEventListener("focus", (e => {
            document.title = t
        }));
        let e = document.getElementsByClassName("letter");
        for (let t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", (function () {
            this.classList.add("rubberBand"), this.addEventListener("animationend", (function () {
                this.classList.remove("rubberBand")
            }), !1)
        }));
        const n = document.querySelectorAll('[name="theme"]');
        n.forEach((t => {
            t.parentElement.addEventListener("click", (() => {
                t.checked = true;
                var e;
                e = t.id, localStorage.setItem("theme", e), document.body.className = t.id
                if(document.body.classList.contains('dark')){
                    document.documentElement.classList = ('scrollbarcolor-dark')
                }
                else if(document.body.classList.contains('light')){
                    document.documentElement.classList = ('scrollbarcolor-light')
                }
                else if(document.body.classList.contains('orange')){
                    document.documentElement.classList = ('scrollbarcolor-orange')
                }
            }))
        })), document.onload = function () {
            const t = localStorage.getItem("theme");
            n.forEach((e => {
                e.id === t && (e.checked = !0)
            })), document.body.className = t
            if(document.body.classList.contains('dark')){
                document.documentElement.classList = ('scrollbarcolor-dark')
            }
            else if(document.body.classList.contains('light')){
                document.documentElement.classList = ('scrollbarcolor-light')
            }
            else if(document.body.classList.contains('orange')){
                document.documentElement.classList = ('scrollbarcolor-orange')
            }
        }(), document.querySelectorAll(".a").forEach((t => {
            t.addEventListener("click", (function() {
            }))
        }))
    })), function() {
        var t, e, n, i, o, r, a, s, d, c, u;
        n = 500, t = [
                [85, 71, 106],
                [174, 61, 99],
                [219, 56, 83],
                [244, 92, 68],
                [255, 255, 255],
                [20, 20, 20]
        ], i = 2 * Math.PI, o = document.getElementById("world"), a = o.getContext("2d"), window.w = 0, window.h = 0, c = function() {
            return window.w = o.width = window.innerWidth, window.h = o.height = window.innerHeight
        }, window.addEventListener("resize", c, !1), window.onload = function() {
            return setTimeout(c, 0)
        }, d = function(t, e) {
            return (e - t) * Math.random() + t
        }, s = function(t, e, n, o) {
            return a.beginPath(), a.arc(t, e, n, 0, i, !1), a.fillStyle = o, a.fill()
        }, u = .5, document.onmousemove = function(t) {
            return u = t.pageX / w
        }, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, e = function() {
            function e() {
                this.style = t[~~d(0, 5)], this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2], this.r = ~~d(2, 1), this.r2 = 2 * this.r, this.replace()
            }
            return e.prototype.replace = function() {
                return this.opacity = 0, this.dop = .03 * d(1, 4), this.x = d(-this.r2, w - this.r2), this.y = d(-20, h - this.r2), this.xmax = w - this.r, this.ymax = h - this.r, this.vx = d(0, 2) + 8 * u - 5, this.vy = .7 * this.r + d(-1, 1)
            }, e.prototype.draw = function() {
                var t;
                return this.x += this.vx, this.y += this.vy, this.opacity += this.dop, this.opacity > 1 && (this.opacity = 1, this.dop *= -1), (this.opacity < 0 || this.y > this.ymax) && this.replace(), 0 < (t = this.x) && t < this.xmax || (this.x = (this.x + this.xmax) % this.xmax), s(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
            }, e
        }(), r = function() {
            var t, i;
            for (i = [], t = 1; t <= n; ++t) i.push(new e);
            return i
        }(), window.step = function() {
            var t, e, n, i;
            for (requestAnimationFrame(step), a.clearRect(0, 0, w, h), i = [], e = 0, n = r.length; e < n; e++) t = r[e], i.push(t.draw());
            return i
        }, step()
    }.call(this);