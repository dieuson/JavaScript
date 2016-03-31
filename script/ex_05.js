document.addEventListener("DOMContentLoaded", 
function () {
					var exercice = document.getElementsByClassName("exercice");
					var plus_button = exercice[0].children[2].children[0].children[0];
					var less_button = exercice[0].children[2].children[0].children[1];
					var list = exercice[0].children[2].children[0].children[2];
					var page = document.getElementsByTagName("body");
					var t = "16";
					plus_button.addEventListener("click", function (){t++; page[0].style.fontSize = t + 'px';});		
					less_button.addEventListener("click", function (){t--; page[0].style.fontSize = t + 'px';});	
					list.addEventListener("change",	function(){page[0].style.background = list.value;});
			});