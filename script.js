
function updateDateTime() {
    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString();
}

updateDateTime();

setInterval(updateDateTime, 1000);


const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML = "☀ Light Mode";
    } else {
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

});



function showSection(sectionId) {

    const sections =
    document.querySelectorAll(".page-section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId)
    .style.display = "block";

    const menuItems =
    document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {
        item.classList.remove("active");
    });

}




new Chart(
document.getElementById("healthChart"),
{
type: "doughnut",

data: {

labels: [
"Healthy",
"Diseased",
"Moderate"
],

datasets: [{
data: [85,10,5]
}]
},

options: {
responsive: true,
plugins: {
legend: {
position: "bottom"
}
}
}

});




new Chart(
document.getElementById("moistureChart"),
{
type: "line",

data: {

labels: [
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets: [{

label: "Moisture %",

data: [
65,
68,
70,
66,
72,
75,
73
],

borderWidth: 3,

fill: false,

tension: 0.4

}]
},

options: {
responsive: true
}

});





new Chart(
document.getElementById("tempChart"),
{
type: "line",

data: {

labels: [
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets: [{

label: "Temperature °C",

data: [
29,
30,
31,
30,
32,
33,
31
],

borderWidth: 3,

fill: false,

tension: 0.4

}]
},

options: {
responsive: true
}

});





new Chart(
document.getElementById("yieldChart"),
{
type: "bar",

data: {

labels: [
"Wheat",
"Rice",
"Corn",
"Sugarcane"
],

datasets: [{

label: "Yield",

data: [
80,
95,
60,
110
]

}]
},

options: {
responsive: true
}

});




new Chart(
document.getElementById("waterChart"),
{
type: "pie",

data: {

labels: [
"Irrigation",
"Rain Water",
"Storage"
],

datasets: [{

data: [
50,
30,
20
]

}]
},

options: {
responsive: true
}

});



const searchInput =
document.querySelector(
".search-box input"
);

if(searchInput){

searchInput.addEventListener(
"keyup",
function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(
".card"
);

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

}




const alerts =
document.querySelectorAll(".alert");

alerts.forEach((alert,index)=>{

setTimeout(()=>{

alert.style.opacity="1";
alert.style.transform=
"translateX(0)";

},index*300);

});




console.log(
"KhetHub Smart Agriculture Dashboard Loaded Successfully"
);