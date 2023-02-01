const elementBtn = document.querySelector("button")
const display = document.querySelector("#display");
const RodzajElementu = document.querySelector("#nowyelement");
const WybierzKolor = document.querySelector("#wybierzkolor");
const ZawartoscElementu = document.querySelector("#zawartoscelementu");
const WybierzKolor2 = document.querySelector('#wybierzkolor2');
const podajpadding = document.querySelector('#padding')

function addElement() {
      const element = document.createElement(RodzajElementu.value);
      element.innerHTML += `Element typu ${RodzajElementu.value} o zawartosci ${ZawartoscElementu.value} <br>`;
      display.appendChild(element);
      element.style.backgroundColor = WybierzKolor.value;
      element.style.color = WybierzKolor2.value;
}
elementBtn.addEventListener("click", addElement);