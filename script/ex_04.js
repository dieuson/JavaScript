var tours = 0;
var text = new String("");
var pressed_key = document.addEventListener("keypress", 
function (event) {
					var exercice = document.getElementsByClassName("exercice");
					var footer = exercice[0].children[2].children[0];
					text += String.fromCharCode(event.keyCode);
					if (tours > 41)
					{
						text =  text.substring(1, 43);
					}
					footer.innerHTML = text;
					tours++;
				});