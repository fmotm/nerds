var button = document.querySelector(".write-us-button");
var modalwindow = document.querySelector(".modal-window");
var closemodalwindow = modalwindow.querySelector(".close");
var writeusarea = modalwindow.querySelector(".write-us");
var bodylock = document.querySelector("body");

button.addEventListener('click', function(){
	modalwindow.classList.add("modal-window-active");
	bodylock.classList.add("lock");
})

closemodalwindow.addEventListener('click', function(){
	modalwindow.classList.remove("modal-window-active");
	bodylock.classList.remove("lock");
})