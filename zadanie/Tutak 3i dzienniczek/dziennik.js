const form = document.querySelector("form");
const inputData = document.getElementById("data");
const inputDzial = document.getElementById("dzial");
const inputOpiekun = document.querySelector('input[name="opiekun"]:checked');
const inputSprawozdanie = document.getElementById("sprawozdanie");
const inputLiczba_godz = document.getElementById("liczba_godz");
const inputRealizacja = document.getElementById("realizacja");
const inputOpanowanie = document.getElementById("opanowanie");
const display = document.querySelector("#displayDziennik");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = inputData.value;
  const dzial = inputDzial.value;
  const opiekun = inputOpiekun.value;
  const sprawozdanie = inputSprawozdanie.value;
  const liczba_godz = inputLiczba_godz.value;
  const realizacja = inputRealizacja.value;
  const opanowanie = inputOpanowanie.value;

  const displayContent = `
  <fieldset>
  <legend>Dane Ucznia i Praktyk</legend>
  <p>Praktyki odbyte w dniu: <strong><font color="#2ea44f">${data}</font></strong>.</p>
  <p>Tego dnia opracowany zosotał temat: <strong><font color="#2ea44f">${dzial}</font></strong>.</p>
  <p>Praktyki nadzorował: <strong><font color="#2ea44f">${opiekun}</font></strong>.</p>
  <p>Liczba zrealizowanych godzin: <strong><font color="#2ea44f">${liczba_godz}</font></strong>.</p>
  <p>Czy praktyka została zrealizowana: <strong><font color="#2ea44f">${realizacja}</font></strong>.</p>
  <p>Materiał opanowany na: <strong><font color="#2ea44f">${opanowanie}</font></strong>.</p>
  <p>Sprawozdanie: <strong><font color="#2ea44f">${sprawozdanie}</font></strong>.</p>
  </fieldset>
  `;
  display.innerHTML = displayContent;
});
