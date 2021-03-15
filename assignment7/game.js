window.onload = pageLoad;

function pageLoad() {
	var btnStart = document.getElementById('start');
	btnStart.onclick = startGame;
}

function startGame() {
	var A_Timer_input = document.getElementById("clockInput").value;
	alert("Prepare...");
	alert('Timer set : ' +A_Timer_input + ' seconds');
	addBox();
	timeStart();
	
}

function timeStart() {

	var A_Timer_input = document.getElementById("clockInput").value;

	var TIMER_TICK = 1000;
	var timer = null;
	//var min = 0.6; // 0.5 minute
	//var second = 10; 
	var x = document.getElementById('clock');
	var btn = document.getElementById('start');
	timer = setInterval(timeCount,TIMER_TICK);
	function timeCount() {
		A_Timer_input = A_Timer_input - 1;
		x.innerHTML = A_Timer_input;
		var allbox = document.querySelectorAll("#Square_Layer_Game div");			
		if(A_Timer_input > 0){
			btn.style.display = "none"
		}else{
			btn.style.display = "inline-block";
		}
		if(allbox.length <= 0){
			alert('You have done in '+ A_Timer_input + ' second ');
			alert('Well done');
			clearScreen();
			clearInterval(timer);
			timer = null;
			btn.style.display = "inline-block";

		}
		else if(A_Timer_input === 0){
			alert('You Lose')
			alert('Try again')
			clearInterval(timer);
			timer = null;
			clearScreen();
		}
		
	}
}

function addBox() {

	var numbox = document.getElementById('numbox').value; // จำนวนกล่อง
	var parseIntNumber = parseInt(numbox);
	var squaresLayer = document.getElementById('Square_Layer_Game') //
	var colorDrop = document.getElementById('color').value;
	for (var i = 0; i < parseIntNumber; i++) {
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);                        // on click function
	}
}

function bindBox(box) {
	let currentBoxInContainer = document.getElementById('Square_Layer_Game');
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function () {
	
		currentBoxInContainer.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#Square_Layer_Game div");
	var containerBox = document.getElementById('Square_Layer_Game');			

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		containerBox.removeChild(allbox[i]);
	}
}




