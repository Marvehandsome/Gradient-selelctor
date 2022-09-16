var changeBG = document.querySelector(".bg-change");
var color1 = document.querySelector(".colorLeft");
var color2 = document.querySelector(".colorRight");
var text = document.querySelector(".textH2")
var text2;


function changeColor() {
    changeBG.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    text.textContent = changeBG.style.background + ";";
    document.getElementById("colorValues").innerHTML = `<div class="flex flex-row gap-6">
    <div class="w-1/2">
    <h1><span class="font-bold">Left Gradient: </span>  ${color1.value}</h1>
    </div>
    <div class="w-1/2">
    <h1> <span class="font-bold">Right Gradient:</span>  ${color2.value}</h1>
    </div>
</div>`;
};



color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);