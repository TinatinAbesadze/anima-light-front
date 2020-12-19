
$(document).ready(function () {
    const btn = document.querySelector(".talk");
    const content = document.querySelector(".content");

    const greeting = [
        "I love anima chatbotics",
        "I love you too dear",
        "I love you so much dear",
        "hello Admin"
    ];

    const dnotknow = [
        "I dnot know what you said",
        " I could not understand what you were saying  ",
        "I could not understand what you were saying"
    ]
    const weather = ["weather is fine"];

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function () {
        console.log("voice is activated,you can to nicrophoee");
    };

    recognition.onresult = function (event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        //content.textContent = transcript;
        readOutloud(transcript);
    };

    //btn.("click", () => {
    //    recognition.start();
    //});
    $(".talk").click(function () {
        recognition.start();
    });

    function readOutloud(massage) {
        //debugger
        const speech = new SpeechSynthesisUtterance();
        const fina = dnotknow[Math.floor(Math.random(dnotknow.length))];
        speech.text = fina;

        if (massage.includes("hello")) {
            speech.text = "hello Admin";
        }
        if (massage.includes("I love anima") || massage.includes("I am admin") || massage.includes("I love you")) {
            const finaltext = greeting[Math.floor(Math.random(greeting.length))];
            speech.text = finaltext;
            console.log(finaltext);
        }

        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    }
})