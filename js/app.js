let dataShow = true;
const demoDiv = document.getElementById("demo");
const btn = document.getElementById("btn");
const btnText = btn.innerHTML;

btn.addEventListener("click", function (e) {
    if (dataShow) {
        demoDiv.innerHTML = Date();
        dataShow = false;
        e.target.innerHTML = "Hide Date And Time..."
        console.log(e.target);
    } else {
        dataShow = true;
        demoDiv.innerHTML = "";

        e.target.innerHTML = btnText;
    }
})