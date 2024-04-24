
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

		/* console.log(now.setHours(18, 40));
		console.log(now);
		console.log(now); */

		// data

		// timer

			const deadline = "2026-05-07";

			function getTimeRemaining(endTime) {
				const t = Date.parse(endTime) - Date.parse(new Date()), // получаем в милисикундах
				days = Math.floor(t / (1000 * 60 * 60 * 24)), // в сутках милисикунд
				hours = Math.floor((t / (1000 * 60 * 604) % 24)),
				min = Math.floor((t / 1000 / 60) % 60),
				sec = Math.floor((t / 1000) % 60);

					/* console.log(days);
					console.log(hours);
					console.log(min);
					console.log(sec); */

				return {
					"total" : t,
					"days": days,
					"hours": hours,
					"min": min,
					"sec": sec
				}
			}

			function getZero(num) {
				if (num >= 0 && num < 10) {
					return `0${num}`;
				} else {
					return num;
				}
			}

			function setClock(selector, endTime) {
				const timer = document.querySelector(selector),
					days = timer.querySelector("#days"),
					hours = timer.querySelector("#hours"),
					minutes = timer.querySelector("#minutes"),
					seconds = timer.querySelector("#seconds"),
					timeInterval = setInterval(updateClock, 1000);

					updateClock();

					/* console.log(hours);
					console.log(days);
					console.log(minutes);
					console.log(seconds); */

					function updateClock() {
						const t = getTimeRemaining(endTime);

						days.innerHTML = getZero(t.days);
						hours.innerHTML = getZero(t.hours);
						minutes.innerHTML = getZero(t.min);
						seconds.innerHTML = getZero(t.sec);

						if (t.total <= 0) {
							clearInterval(timeInterval);
						}
					}
			}

			setClock(".timer", deadline);

		// Timer

		// 43

		const scrollBox = document.querySelector(".scroll-window");
		const btnBox = document.querySelector(".wBtn");
		const btnBox2 = document.querySelector(".wBtn2");

		const width = scrollBox.scrollWidth;
		const height = scrollBox.scrollHeight;


		/* const width = scrollBox.clientWidth;
		const heght = scrollBox.clientHeight; */

	/* 	const width = scrollBox.offsetWidth;
		const heght = scrollBox.offsetHeight; */

		/* console.log(width);
		console.log(height);

		console.log(scrollBox);
		console.log(btnBox); */

		btnBox.addEventListener("click", () => {
			scrollBox.style.height = height + "px";

			/* var eeee = height + "px";
			console.log(height);
			console.log(eeee); */
			//scrollBox.style.height =  "20px";
		});

		btnBox2.addEventListener("click", () => {
			window.scrollTo(0, 0);
		});

		//console.log(scrollBox.getBoundingClientRect().top);

		console.log(scrollBox.getBoundingClientRect());

		const style = window.getComputedStyle(scrollBox);
		console.log(style);
		// 43

		
		
	
});


// console.log(tabs);