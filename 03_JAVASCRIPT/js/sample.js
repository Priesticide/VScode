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