(function () {
  var t = document.getElementById("navtoggle");
  var m = document.getElementById("navlinks");
  if (!t || !m) return;
  t.addEventListener("click", function () {
    var open = m.classList.toggle("open");
    t.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.style.overflow = open ? "hidden" : "";
  });
  m.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      m.classList.remove("open");
      t.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = "";
    }
  });
})();
