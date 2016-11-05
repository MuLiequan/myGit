
var btn = document.getElementById('input2');
btn.onclick = btnOnlick; 




function btnOnlick(){
	
	var boxDiv = document.getElementsByClassName('message');
	var imgDiv = document.getElementsByClassName('message-img');
	
	var getDate = input1.value;
	getYear = getDate.substr(0, 4);
	getMonth = getDate.substr(5, 2);
	getDay = getDate.substr(8, 2);
	
	console.log(getYear);
	console.log(getMonth);
	console.log(getDay);

clearBox(boxDiv,imgDiv);

//		for(i=0; i<12; i++){
//			boxDiv[i].style.background = 'rgba(1, 1, 1, 0)';
//			boxDiv[i].style.boxShadow = '0px 0px 0px blue';
//			imgDiv[i].style.background = 'rgb(234, 229, 248)';
//			imgDiv[i].style.boxShadow = '0px 0px 0px rgb(170, 155, 154)';
//		}

	
	
	
	if(getMonth == 3 && getDay>20 && getDay<32 || getMonth == 4 && getDay>0 && getDay<22){
		boxDiv[0].style.background = 'cyan';
		boxDiv[0].style.boxShadow = '0px 0px 40px blue';
		imgDiv[0].style.background = 'rgb(252, 209, 210)';
		imgDiv[0].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 4 && getDay>24 && getDay<31 || getMonth == 5 && getDay>0 && getDay<21){
		boxDiv[1].style.background = 'cyan';
		boxDiv[1].style.boxShadow = '0px 0px 40px blue';
		imgDiv[1].style.background = 'rgb(252, 209, 210)';
		imgDiv[1].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 5 && getDay>20 && getDay<32 || getMonth == 6 && getDay>0 && getDay<22){
		boxDiv[2].style.background = 'cyan';
		boxDiv[2].style.boxShadow = '0px 0px 40px blue';
		imgDiv[2].style.background = 'rgb(252, 209, 210)';
		imgDiv[2].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 6 && getDay>21 && getDay<31 || getMonth == 7 && getDay>0 && getDay<23){
		boxDiv[3].style.background = 'cyan';
		boxDiv[3].style.boxShadow = '0px 0px 40px blue';
		imgDiv[3].style.background = 'rgb(252, 209, 210)';
		imgDiv[3].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else 
		if(getMonth == 7 && getDay>22 && getDay<32 || getMonth == 8 && getDay>0 && getDay<23){
		boxDiv[4].style.background = 'cyan';
		boxDiv[4].style.boxShadow = '0px 0px 40px blue';
		imgDiv[4].style.background = 'rgb(252, 209, 210)';
		imgDiv[4].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 8 && getDay>23 && getDay<32 || getMonth == 9 && getDay>0 && getDay<23){
		boxDiv[5].style.background = 'cyan';
		boxDiv[5].style.boxShadow = '0px 0px 40px blue';
		imgDiv[5].style.background = 'rgb(252, 209, 210)';
		imgDiv[5].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 9 && getDay>22 && getDay<31 || getMonth == 10 && getDay>0 && getDay<24){
		boxDiv[6].style.background = 'cyan';
		boxDiv[6].style.boxShadow = '0px 0px 40px blue';
		imgDiv[6].style.background = 'rgb(252, 209, 210)';
		imgDiv[6].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 10 && getDay>23 && getDay<32 || getMonth == 11 && getDay>0 && getDay<24){
		boxDiv[7].style.background = 'cyan';
		boxDiv[7].style.boxShadow = '0px 0px 40px blue';
		imgDiv[7].style.background = 'rgb(252, 209, 210)';
		imgDiv[7].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 11 && getDay>23 && getDay<31 || getMonth == 12 && getDay>0 && getDay<22){
		boxDiv[8].style.background = 'cyan';
		boxDiv[8].style.boxShadow = '0px 0px 40px blue';
		imgDiv[8].style.background = 'rgb(252, 209, 210)';
		imgDiv[8].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 12 && getDay>21 && getDay<32 || getMonth == 1 && getDay>0 && getDay<20){
		boxDiv[9].style.background = 'cyan';
		boxDiv[9].style.boxShadow = '0px 0px 40px blue';
		imgDiv[9].style.background = 'rgb(252, 209, 210)';
		imgDiv[9].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 1 && getDay>19 && getDay<32 || getMonth == 2 && getDay>0 && getDay<19){
		boxDiv[10].style.background = 'cyan';
		boxDiv[10].style.boxShadow = '0px 0px 40px blue';
		imgDiv[10].style.background = 'rgb(252, 209, 210)';
		imgDiv[10].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else if(getMonth == 2 && getDay>18 && getDay<30 || getMonth == 3 && getDay>0 && getDay<21){
		boxDiv[11].style.background = 'cyan';
		boxDiv[11].style.boxShadow = '0px 0px 40px blue';
		imgDiv[11].style.background = 'rgb(252, 209, 210)';
		imgDiv[11].style.boxShadow = '5px 5px 30px rgb(170, 155, 154)';
	}else {
		alert('你确定你生在今天？');
	}
}


//	setInterval(function(){
//		for(i=0; i<12; i++){
//		boxDiv[i].style.background = 'rgba(1, 1, 1, 0)';
//		boxDiv[i].style.boxShadow = '0px 0px 0px blue';
//		imgDiv[i].style.background = 'rgb(234, 229, 248)';
//		imgDiv[i].style.boxShadow = '0px 0px 0px rgb(170, 155, 154)';
//		}
//	},5000);

function clearBox(boxDiv,imgDiv){
		for(i=0; i<12; i++){
			boxDiv[i].style.background = 'rgba(1, 1, 1, 0)';
			boxDiv[i].style.boxShadow = '0px 0px 0px blue';
			imgDiv[i].style.background = 'rgb(234, 229, 248)';
			imgDiv[i].style.boxShadow = '0px 0px 0px rgb(170, 155, 154)';
		}
	
}
