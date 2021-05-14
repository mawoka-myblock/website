function virus() {
    alert("You got a Virus!")
    alert("If you thought that this was a real virus warning, please shut down your computer and sell it.")

}

const greetings = [
    "<br><br>Hey! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Hey!
    "<br><br>Moin! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Moin!
    "<br><br>Hello! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //G'day!
    "<br><br>G\'day! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Moin
    "<br><br>Grüß Gott! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Grüß Gott!
    "<br><br>Merhaba! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Merhaba!
    "<br><br>Hi! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", // Hi!
    "<br><br>Yo! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Yo!
    "<br><br>Sup? <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Sup
    "<br><br>What's Up? <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", // What's up?
    "<br><br>Hiya! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Hiya!
    "<br><br>Ahoy! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Ahoy!
    "<br><br>Howdy! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>", //Howdy!
    "<br><br>‘Ello, gov’nor! <span class='hand'>👋</span><p style='color: beige;font-size: 30%;font-weight: 400;'>How are you?</p><br><br>" // ‘Ello, gov’nor!
];


function change_greeting() {
    document.getElementById('hello-snippet').innerHTML = greetings[Math.floor(Math.random() * greetings.length)]
} 


window.addEventListener("load", function() {
    change_greeting()
})








