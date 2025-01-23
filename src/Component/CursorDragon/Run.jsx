const { width, height } = require("@fortawesome/free-solid-svg-icons/fa0");

let pointerX = 0;
let pointerY = 0;

document.addEventListener("mousemove", (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
});

const Run = () => {
  requestAnimationFrame(Run);

  const e = elems[0];
  const ax = (Math.cos(3 * frm) * rad * width) / height;
  const ay = (Math.sin(4 * frm) * rad * height) / width;

  e.x += (ax + pointerX - e.x);
  e.y += (ay + pointerY - e.y);

  for (let i = 1; i < n; i++) {
    const e = elems[i];
    const ep = elems[i - 1];
    const angle = Math.atan2(e.y - ep.y, e.x - ep.x);

    e.x += (ep.x - e.x + (Math.cos(angle) * (100 - i)) / 5);
    e.y += (ep.y - e.y + (Math.sin(angle) * (100 - i)) / 5);

    const scale = (162 + 4 * (1 - i)) / 50;
    e.use.setAttributeNS(
      null,
      "transform",
      `translate(${(ep.x + e.x) / 2}, ${(ep.y + e.y) / 2})
       rotate(${(180 / Math.PI) * angle})
       scale(${scale}, ${scale})`
    );
  }
};