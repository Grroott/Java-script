


var temp=document.querySelector("#one");
console.log(temp)
// temp.addEventListener('click', function(){
// 	temp.textContent == "Two"
// })

// temp.addEventListener('click', function(){
// 	temp.textContent="changing content";
// 	temp.style.color="red";
// })

temp.addEventListener('click', function(){
	if(temp.textContent === "One"){
		temp.textContent = "O"
	}
	else if(temp.textContent === "X"){
		temp.textContent = "O"
	}
	else{
		temp.textContent = ""
	}
})