const htmlBody = document.querySelector('body');
const randomClickFunction = function ()
{
    const colors = ["#002984", "#003156", "red", "orange", "cyan", "black"];
    const randomIdx = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIdx];
    htmlBody.style.backgroundColor = randomColor;

    console.log("The user clicks and the color goes to " + randomColor);
}
