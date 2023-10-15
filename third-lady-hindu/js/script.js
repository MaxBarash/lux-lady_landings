let wrapper = document.querySelector(".wrapper");
function fall() {
  let e;
  e =
    window.innerWidth <= 1e3
      ? Math.floor(50 * Math.random() + 50)
      : window.innerWidth <= 1300
      ? Math.floor(60 * Math.random() + 60)
      : Math.floor(70 * Math.random() + 80);
  const t = Math.floor(3 * Math.random()),
    a = Math.floor(Math.random() * window.innerWidth),
    n = Math.floor(360 * Math.random()),
    i = 1 * Math.random() + 2,
    o = document.createElement("img");
  o.classList.add("money"),
    o.setAttribute("src", "images/money.webp"),
    (o.style.cssText = `\n        height: ${e}px;\n        transform: translateX(${
      a + e
    }px) rotate(${n}deg);\n        top: -${e}px;\n        transition: ${i}s linear;\n        z-index: ${
      1 === t ? 1 : 3
    };`),
    wrapper.appendChild(o),
    setTimeout(() => {
      (o.style.transform = `translate(${a + e}px, ${
        window.innerHeight + e
      }px) rotate(${1.3 * n}deg)`),
        setTimeout(() => {
          o.getBoundingClientRect().bottom > 0 && o.remove();
        }, 1e3 * i),
        fall();
    }, 290);
}

function adaptationElements() {
  window.innerWidth / window.innerHeight <= 0.49
    ? (wrapper.classList.add("modificate1"),
      wrapper.classList.remove("modificate"))
    : window.innerWidth / window.innerHeight < 1
    ? (wrapper.classList.add("modificate"),
      wrapper.classList.remove("modificate1"))
    : (wrapper.classList.remove("modificate"),
      wrapper.classList.remove("modificate1"));
}
fall(),
  adaptationElements(),
  window.addEventListener("resize", adaptationElements);
