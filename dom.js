var onee = document.querySelector(".one")
var twoo = document.querySelector(".two")
var threee = document.querySelector(".three")

onee.addEventListener('mouseover', function(){
	onee.textContent="changing content";
	onee.style.color="red";
})


onee.addEventListener('mouseout', function(){
	onee.textContent="Heading 1";
	onee.style.color="black";
})

twoo.addEventListener('click', function(){
	twoo.textContent="Heading 2 clicked";
	twoo.style.color="red";
})

threee.addEventListener('dblclick', function(){
	threee.textContent="Heading 3 double clicked";
	threee.style.color="red";
})


