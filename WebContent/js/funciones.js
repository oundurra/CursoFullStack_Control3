function cambiarColor() {
    if (document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "lightyellow";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
}

function mostrarAlerta() {
    alert(document.getElementById("alerta").value);
}

function mostrarAjax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ajax").value = this.responseText;
    }
  };
  xhttp.open("GET", "files/ajax.txt", true);
  xhttp.send();
}

