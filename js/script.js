const hoverLink = document.querySelector(".catalog");
const hoverMenu = document.querySelector(".categories-menu");

hoverLink.addEventListener("mouseover", function (evt) {
	hoverMenu.classList.remove("visually-hidden");
});

hoverLink.addEventListener("mouseout", function (evt) {
	hoverMenu.classList.add("visually-hidden");
});

const writeLink = document.querySelector(".link-write");
const writeForm = document.querySelector(".form-back");
const closeLink = document.querySelector(".button-close");

writeLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeForm.classList.remove("visually-hidden");
});

closeLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeForm.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode ===27) {
		if (!writeForm.classList.contains("visually-hidden")) {
			evt.preventDefault();
			writeForm.classList.add("visually-hidden");
		}
	}
});

const closeMap = document.querySelector(".button-close2");
const clickMap = document.querySelector(".map-click");
const modalMap = document.querySelector(".map-box");

clickMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("visually-hidden");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (!modalMap.classList.contains("visually-hidden")) {
			evt.preventDefault();
			modalMap.classList.add("visually-hidden");
		}
	}
})