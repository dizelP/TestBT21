document.getElementById("startButton").addEventListener("click", function() {
    document.getElementsByClassName("popup-background")[0].style.display = "flex";
    document.getElementById("popup").style.display = "block";
    });
    
    document.getElementsByClassName("popup-background")[0].addEventListener("click", function(e) {
    if (e.target === this) {
    document.getElementsByClassName("popup-background")[0].style.display = "none";
    document.getElementById("popup").style.display = "none";
    }
    });
    
    document.getElementById("submitButton").addEventListener("click", function() {
    var inputs = document.getElementsByTagName("input");
    var data = {};
    
    for (var i = 0; i < inputs.length; i++) {
    data[inputs[i].placeholder] = inputs[i].value;
    }
    
    var json = JSON.stringify(data);
    
    document.getElementById("popup").style.display = "none";
    document.getElementsByClassName("popup-background")[0].style.display = "none";
    
    var output = document.createElement("p");
    output.innerText = "Данные: " + json;
    document.body.appendChild(output);
    });