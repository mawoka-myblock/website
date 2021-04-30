function virus() {
    alert("You got a Virus!")
    alert("If you thought that this was a real virus warning, please shut down your computer and sell it.")

}

const greetings = [
    "<br><br>Hey! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>",
    "<br><br>Moin! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>"
];


const change_greeting = new Function("document.getElementById('hello-snippet').innerHTML = greetings[Math.floor(Math.random() * greetings.length)]");
const datetime_now = new Function("document.getElementById('datetime-navbar').innerHTML = let [month, date, year] = new Date().toLocaleDateString('en-US').split('/')");

 


window.addEventListener("load", function() {
    change_greeting()
    datetime_now()
})






