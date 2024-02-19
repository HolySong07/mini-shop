
window.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"),
		tabsParent = document.querySelector(".tabheader__items");

		// tabs

		function hideTabContent() {
			tabsContent.forEach(item => {
				item.style.display = "none";
			});

			tabs.forEach(item => {
				item.classList.remove("tabheader__item_active");
			});
		};

		function showTabContent(number = 0) {
			tabsContent[number].style.display = "block";
			tabs[number].classList.add("tabheader__item_active");
		}

		hideTabContent();
		showTabContent(0);

		tabs.forEach((item, index) => {
			item.addEventListener("click", () => {
				hideTabContent();
				showTabContent(index);
				
			});
		});

		// tabs

		// modal

		let modal = document.querySelector(".modal"),
		btnWhite = document.querySelector(".btn_white"),
		modalClose = document.querySelector(".modal__close");
		

		/* const timerID = setTimeout(function() {
			modal.style.display = "block";
		}, 6000); */

		modalClose.addEventListener("click", () => {
			modal.style.display = "none";
		});

		btnWhite.addEventListener("click", () => {
			modal.style.display = "block";
			clearInterval(timerID);
		});

		// modal

		// data

		let now = new Date();
		
	/* 	console.log(now.getFullYear());
		console.log(now.getMonth());
		console.log(now.getDate());
		console.log(now.getDay());

		console.log(now.getUTCHours()); */

		console.log(now.setHours(18, 40));
		console.log(now);
		console.log(now);

		// data

		
		
	
});


// console.log(tabs);