const zodiac = document.getElementById("zodiac");


const body = document.body;


const changeBackground = () => {

    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;

        case "tarus":
            body.style.backgroundColor = "pink";
            break;

        case "gemini":
            body.style.backgroundColor = "green";
            break;
        case "cancer":
            body.style.backgroundColor = "orange";
            break;
        case "leo":
            body.style.backgroundColor = "blue";
            break;
        case "virgo":
            body.style.backgroundColor = "violet";
            break;
        case "scorpio":
            body.style.backgroundColor = "black";
            break;
        case "sagittarius":
            body.style.backgroundColor = "darkgreen";
            break;
        case "aquarius":
            body.style.backgroundColor = "purple";
            break;
        case "capricorn":
            body.style.backgroundColor = "darkblue";
            break;
        case "pisces":
            body.style.backgroundColor = "#fc0303";
            break;

        default:
            break;
    }
};