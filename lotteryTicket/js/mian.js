
var num1 = []; //红球 01-33
var num2 = [];//篮球 01-16

// 红球
for(i= 1; i<=33; i++ ){
	if(i<10){
		num1.push('0'+ i);
	}else {
		num1.push(i);
	}
}
//篮球
for(j= 1; j<=16; j++ ){
	
	
	if(j<10){
		num2.push('0'+ j);
	}else {
		num2.push(j);
	}
}

randomnum1 = Math.round(Math.random() * 33);
randomnum2 = Math.round(Math.random() * 16);

var mainDiv = document.getElementById('box');

var but = document.getElementsByTagName('button');
but[0].onclick =oneClick;
but[1].onclick =twoClick;
//but[2].onclick =nclear;




	for(k=0; k<7; k++ ){
		var boxDiv = document.createElement('div');
		boxDiv.style.width = '50px';
		boxDiv.style.height = '50px';
	//	boxDiv.style.border = '1px solid black';
		boxDiv.style.borderRadius = '30px';
		boxDiv.style.margin = '12px';
		boxDiv.style.display = 'inline-block';
		boxDiv.style.color = 'white';
		boxDiv.style.fontSize = '2.5rem';	
		boxDiv.style.textAlign = 'center';
		boxDiv.style.lineHeight = '50px';
		boxDiv.setAttribute('class','ball');
		boxDiv.style.verticalAlign = 'top';
		mainDiv	.appendChild(boxDiv);
		
		if(k<6){
			boxDiv.style.background = 'red';
			boxDiv.style.boxShadow = '5px 2px 10px red';
		}else {
			boxDiv.style.background = 'blue';
			boxDiv.style.boxShadow = '5px 2px 10px blue';
			
			
		}
	}
	

function aaa(){
	
		var boxm = document.getElementsByClassName('ball');
		
		num1=num1.sort(function(){
			return Math.random()-0.5
			});
			
			for(a=0; a<6; a++){			
				boxm[a].innerText =num1[a]; 
			}
		
		
		
		
		num2=num2.sort(function(){
			return Math.random()-0.5
			});
		boxm[6].innerText =num2[1]; 
}

tim = setInterval('aaa()',1);

function oneClick(){
	clearInterval(tim);
}

	
function twoClick(){
	tim = setInterval('aaa()',1);
}