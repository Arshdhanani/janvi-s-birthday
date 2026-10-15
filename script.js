(function () {
  "use strict";
  var C = window.SITE_CONFIG;
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function addParagraphs(target, paragraphs, className) {
    paragraphs.forEach(function (t) { target.appendChild(el("p", className || "", t)); });
  }

  document.title = "Happy Birthday, " + C.herName;
  $("env-date").textContent = C.birthday;
  $("env-line").textContent = C.opening.line;
  $("env-card").textContent = C.opening.card;
  $("open-btn").textContent = C.opening.button;
  $("l-greet").textContent = C.letter.greeting;
  addParagraphs($("l-body"), C.letter.paragraphs);
  $("l-close").textContent = C.letter.closing;
  $("l-sign").textContent = C.letter.signature;
  $("next-2").textContent = C.letter.button;
  $("p-title").textContent = C.photos.title;
  $("p-sub").textContent = C.photos.subtitle;
  $("next-3").textContent = C.photos.button;
  $("r-date").textContent = C.birthday;
  $("r-head").textContent = "Happy Birthday, " + C.herName + " ❤️";
  addParagraphs($("r-body"), C.reveal.paragraphs, "rise");
  $("r-close").textContent = C.reveal.closing;
  $("r-sign").textContent = C.reveal.signature;
  $("relive").textContent = C.reveal.button;

  document.querySelectorAll(".scene").forEach(function (s) {
    s.querySelectorAll(".rise").forEach(function (e, i) { e.style.setProperty("--i", i); });
  });

  function show(n) {
    var from = document.querySelector(".scene.active");
    var to = $("scene-" + n);
    if (!to || from === to) return;
    if (from) from.classList.remove("active");
    to.scrollTop = 0;
    to.classList.add("active");
    if (n === 5) burst();
    var heading = to.querySelector("h1,h2");
    if (heading) { heading.setAttribute("tabindex", "-1"); heading.focus({ preventScroll: true }); }
  }
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { show(Number(b.getAttribute("data-go"))); });
  });

  var opening = false;
  $("open-btn").addEventListener("click", function () {
    if (opening) return;
    opening = true;
    $("envelope").classList.add("open");
    var music = $("audio");
    if (music && music.paused) {
      music.src = C.song.file;
      var playAttempt = music.play();
      if (playAttempt && playAttempt.catch) {
        playAttempt.catch(function () {
          // Some browsers may block playback; the user can still open the surprise.
        });
      }
    }
    $("open-btn").disabled = true;
    var delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1250;
    window.setTimeout(function () { show(2); opening = false; }, delay);
  });

  var slideIndex = 0;
  var slideTimer = null;
  var quotes = [
    "Every beautiful story has moments\nthat become memories forever. ❤️",
    "Your smile makes ordinary days\nfeel like the most beautiful ones. ✨",
    "My favorite place will always be\nwherever I get to be with you. 💗",
    "One picture, a thousand feelings,\nand a memory I will always treasure. 🌹",
    "Life feels a little more magical\nwith you in every chapter. 💫",
    "If I could keep one moment forever,\nit would be one of these with you. 🥹",
    "More laughter, more little adventures,\nand more memories side by side. 🫶",
    "Today celebrates you; my heart\ncelebrates having you in my life. 🎂❤️"
  ];
  var slides = C.photos.items || [];
  function showSlide(index) {
    if (!slides.length) return;
    slideIndex = (index + slides.length) % slides.length;
    var item = slides[slideIndex];
    var image = $("slide-photo");
    image.classList.remove("visible");
    image.alt = item.caption || ("Special memory " + (slideIndex + 1));
    image.onload = function () { image.classList.add("visible"); };
    image.onerror = function () { image.classList.remove("visible"); };
    image.src = item.src;
    $("slide-quote").textContent = item.quote || quotes[slideIndex % quotes.length];
    $("slide-count").textContent = (slideIndex + 1) + " / " + slides.length;
  }
  function restartSlideTimer() {
    if (slideTimer) window.clearInterval(slideTimer);
    slideTimer = window.setInterval(function () { showSlide(slideIndex + 1); }, 5000);
  }
  $("slide-prev").addEventListener("click", function () { showSlide(slideIndex - 1); restartSlideTimer(); });
  $("slide-next").addEventListener("click", function () { showSlide(slideIndex + 1); restartSlideTimer(); });
  showSlide(0);
  restartSlideTimer();

  var audio = $("audio");
  audio.src = C.song.file;

  $("relive").addEventListener("click", function () {
    audio.pause();
    try { audio.currentTime = 0; } catch (e) {}
    $("envelope").classList.remove("open");
    $("open-btn").disabled = false;
    opening = false;
    show(1);
  });

  var cv = $("fx"), cx = cv.getContext("2d"), W, H, ps = [];
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function size() {
    var d = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * d; cv.height = H * d;
    cx.setTransform(d, 0, 0, d, 0, 0);
  }
  function mk(y) {
    return { x: Math.random() * W, y: y, r: Math.random() * 1.6 + .5, vx: (Math.random() - .5) * .2,
      vy: -(Math.random() * .3 + .1), a: Math.random() * .25 + .08 };
  }
  function burst() {
    if (calm) return;
    for (var i = 0; i < 55; i++) {
      var ang = Math.random() * 6.283, sp = Math.random() * 3 + 1;
      ps.push({ x: W / 2, y: H * .38, r: Math.random() * 2 + 1, vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp - 1, a: 1, life: 85, burst: true });
    }
  }
  function tick() {
    cx.clearRect(0, 0, W, H);
    for (var i = ps.length - 1; i >= 0; i--) {
      var p = ps[i]; p.x += p.vx; p.y += p.vy;
      if (p.burst) {
        p.vx *= .97; p.vy = p.vy * .97 + .04; p.life--; p.a = p.life / 85;
        if (p.life <= 0) { ps.splice(i, 1); continue; }
      } else if (p.y < -10) { ps[i] = mk(H + 10); p = ps[i]; }
      cx.fillStyle = "rgba(201,169,110," + Math.max(p.a, 0) + ")";
      cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill();
    }
    if (!calm) requestAnimationFrame(tick);
  }
  size();
  window.addEventListener("resize", size);
  if (!calm) { for (var k = 0; k < 28; k++) ps.push(mk(Math.random() * H)); tick(); }


})();
