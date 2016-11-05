var showColor = document.getElementById('showColor');
var countDown = document.getElementById('topLeft');
var goal = document.getElementById('topRight');
var clickWord = document.getElementsByClassName('showText');
	clickWord[0].onclick = clickaa;
	clickWord[1].onclick = clickaa;
	clickWord[2].onclick = clickaa;
	clickWord[3].onclick = clickaa;
	clickWord[4].onclick = clickaa;
	
var word = '';
var fontColor = '';
//随机 字	
function randomWord() {
	var num1 = Math.floor(Math.random() * 5);
	switch(num1) {
		case 0:
			word = '红';
			break;
		case 1:
			word = '绿';
			break;
		case 2:
			word = '黄';
			break;
		case 3:
			word = '黑';
			break;
		case 4:
			word = '蓝';
			break;
		default:
	}

}

//随机 颜色
function randomColor() {
	var num2 = Math.floor(Math.random() * 5);

	switch(num2) {
		case 0:
			fontColor = 'red';
			break;
		case 1:
			fontColor = 'yellow';
			break;
		case 2:
			fontColor = 'green';
			break;
		case 3:
			fontColor = 'blue';
			break;
		case 4:
			fontColor = 'black';
			break;
		default:
	}

}

//视图
function view(){
	randomColor();
	randomWord();
	
	showColor.innerText = word;
	showColor.style.color = fontColor;
	
}
view();


//选择
function randomFont() {
	for(i = 0; i < 5; i++) {
		for(j = 0; j < 500; j++) {
			randomColor();
			randomWord();
			if(i == 0) {
				clickWord[i].innerText = word;
				clickWord[i].style.color = fontColor;

			} else if(i == 1 && clickWord[i - 1].innerText != word && clickWord[i - 1].style.color != fontColor) {
				clickWord[i].innerText = word;
				clickWord[i].style.color = fontColor;

			}else if(i == 2 && clickWord[i - 1].innerText != word && clickWord[i - 2].innerText != word &&  clickWord[i - 1].style.color != fontColor  && clickWord[i - 2].style.color != fontColor){
				clickWord[i].innerText = word;
				clickWord[i].style.color = fontColor;
				
			}else if(i == 3 && clickWord[i - 1].innerText != word && clickWord[i - 2].innerText != word && clickWord[i - 3].innerText != word &&  clickWord[i - 1].style.color != fontColor  && clickWord[i - 2].style.color != fontColor && clickWord[i - 3].style.color != fontColor){
					clickWord[i].innerText = word;
				clickWord[i].style.color = fontColor;
				
			}else if(i == 4 && clickWord[i - 1].innerText != word && clickWord[i - 2].innerText != word && clickWord[i - 3].innerText != word && clickWord[i - 4].innerText != word &&  clickWord[i - 1].style.color != fontColor  && clickWord[i - 2].style.color != fontColor && clickWord[i - 3].style.color != fontColor &&clickWord[i - 4].style.color != fontColor){
					clickWord[i].innerText = word;
				clickWord[i].style.color = fontColor;
				
			}else {
				randomColor();
				randomWord();
			}
		}

	}
}
randomFont();



//得分
var score = 0;
goal.innerText = '得分：'+ score;

var a=0;
var tim;
//点击开始
function clickaa(){

	var text = this.innerText ;
	console.log(text);
		switch(text) {
		case '红':
			color1= 'red';
			break;
		case '黄':
			color1 = 'yellow';
			break;
		case '绿':
			color1 = 'green';
			break;
		case '蓝':
			color1 = 'blue';
			break;
		case '黑':
			color1 = 'black';
			break;
		default:
	}

	var color2 = showColor.style.color;
	
	if(color1 == color2){
		score++;
		randomFont();
		view();
	}
	goal.innerText = '得分：'+ score; 
		a++;
		if(a==1){
			var tim = setInterval('timer()',1000);
		}

}


//倒计时
var time = 20;
countDown.innerText = '剩余时间:'+ '     ' + time;
function timer(){
		if(time == 0){
			alert('游戏结束'+'  '+'得分：'+ score );
			time = 20;
			score = 0;
			goal.innerText = '得分：'+  score; 
			history.go('0');

		}else{

			time--;
			console.log(time);
			countDown.innerText = '剩余时间:'+ '     ' + time;
		}
		
}
