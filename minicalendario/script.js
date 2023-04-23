const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

//tomo los datos del dia desde la computadora
const date = new Date();
//console.log(date.getFullYear());
//paso a la constante el mes
const month = date.getMonth();
//modifico el elemento del mes
monthNameEl.innerText = date.toLocaleString("es",{
    month:"long"
});
dayNameEl.innerText = date.toLocaleString("es", {
    weekday:"long"
});
dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();