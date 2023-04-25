const form = document.querySelector("form");
const inputImie = document.querySelector("#imie");
const inputKlasa = document.querySelector("#klasa");
const inputMiejsceP = document.querySelector("#miejsceP");
const inputRok = document.querySelector("#rok");
const inputRozp = document.querySelector("#rozp");
const inputZak = document.querySelector("#zak");
const display = document.querySelector("#displayIndex");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const imie = inputImie.value;
  const klasa = inputKlasa.value;
  const miejsceP = inputMiejsceP.value;
  const rok = inputRok.value;
  const rozp = inputRozp.value;
  const zak = inputZak.value;
  const displayContent = `
    <fieldset>
        <legend>Dane Ucznia i Praktyk</legend>
        <p>Imie i Nazwisko: <strong><font color="#2ea44f">${imie}</font></strong></p>
        <p>Klasa: <strong><font color="#2ea44f">${klasa}</font></strong></p>
        <p>Miejsce Praktyki: <strong><font color="#2ea44f">${miejsceP}</font></strong></p>
        <p>Rok Szkolny: <strong><font color="#2ea44f">${rok}</font></strong></p>
        <p>Data Rozpoczęcia: <strong><font color="#2ea44f">${rozp}</font></strong></p>
        <p>Data Zakończenia: <strong><font color="#2ea44f">${zak}</font></strong></p>
    </fieldset>
  `;
  display.innerHTML = displayContent;
});
