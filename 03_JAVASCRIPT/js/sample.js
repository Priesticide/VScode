/*
   별도로 작성된 자바스크립트 샘플
*/

function samp(){
    window.alert("별도로 작성된 samp()함수 실행됨");
}

function answer01(){

	var qnum = Number(document.getElementById("q01_num").value);
    
	console.log(qnum);
   	if(isFinite(qnum)){
    
     alert("숫자입니다.");
    
    } else {
    
    alert("숫자가 아닙니다.");
    }
    
}

function answer02(){
		
    var an = document.getElementById('answer').value;
    
    var nl = document.getElementById('nameList').innerText;
    
    // 배열로만듬
    var arrnl = nl.split(' ');

        // indexOf는 배열에 문자열이 없는 경우 -1 를 리턴해준다.
        if(arrnl.indexOf(an) >= 0){

            alert('이름이 있습니다.');

        } else {

            alert('이름이 없습니다.');

        }
    }

    function answer04(){

		var checkbox = document.getElementsByName('subject');

		var allbox = document.getElementsByName('all');

		console.log(allbox);

		if(allbox[0].checked == true){

			for(var i = 0; i <checkbox.length; i++){
				checkbox[i].checked = true;

			}
		} else {
			
			for(var i = 0; i < checkbox.length; i++){

				checkbox[i].checked = false;
			}
		}
	}

    function answer05(){

		var randomInput = document.getElementById('randomInput');

		randomNumber = Math.floor((Math.random() *20) +1); 

		console.log(randomNumber);

		randomInput.placeholder= randomNumber;

	}

    function answer06(){
		var locationSelect = document.getElementById('locationSelect');

		if(locationSelect[1].selected == true){

			window.location.href = "http://www.naver.com";

		} else if(locationSelect[2].selected == true){

			window.location.href = "http://www.google.com";

		} else if(locationSelect[3].selected == true){

			window.location.href = "http://www.w3schools.com";

		}
	}

	function answer07(){
		var numVal = document.getElementById('numVal').innerText;
	
		var arr = numVal.split(',');
	
	
		// console.log(sorted);
			
		var sortedArr = arr.sort(function(left, right){
								  return left - right;
								 });
	
		alert(sortedArr);
	
	
	}

	function answer08(){

		var date2
		var date = document.getElementById('startDate').valueAsDate;
		console.log(date);

		// 자바스크립트 31에 내용이있음 new Date()에 값을 넣는 방식

		var currnTime = new Date();
		var startday = date.getTime(); 

		console.log(startday);

		var dday = currnTime.getTime();

		var day = Math.floor((dday - startday) / (1000 * 60 * 60* 24));


		

		alert(day + "일 이 지났습니다.");

	}
