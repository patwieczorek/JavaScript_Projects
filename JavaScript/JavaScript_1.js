function Food_Function() {
    var Food_Output;
    var Food = document.getElementById ("Food_Input").value;
    var Food_String = " is a delicius dish!";
    switch(Food) {
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
            break;
            case "Roast":
                Food_Output = "Roast" + Food_String;
                break;
                case "Carbonara":
                    Food_Output = "Carbonara" + Food_String;
                    break;
                    case "Pesto-pasta":
                        Food_Output = "Pesto-pasta" + Food_String;
                        break;
                        case "Curry":
                            Food_Output = "Curry" + Food_String;
                            break;
                            default:
                                Food_Output = "Please enter a dish exacly as listed above.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
    }

function Hello_Customer_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 30, 120, 60);
