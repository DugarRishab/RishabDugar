window.onload = () => {
	mouseFunctions();
	pageChange();
	const body = document.querySelector("body");
	if (body.classList.contains("about-me")) {
		subMenuNav();
		scrollAboutMe();
	}
	if (body.classList.contains("home")) {

		//scrollAboutMe();
		scrollingEffectOnHome();
	}
}
const mouseFunctions = () => {
	let mousex = 0, mousey = 0;
	let xp = 0; yp = 0;

	document.addEventListener("mousemove", e => {
		mousex = e.pageX - 20;
		mousey = e.pageY - 20;
	});

	const mouseCircle = document.querySelector(".circle");
	const mouseBgCircle = document.querySelector(".bg-circle");
	const mouseHoverText = document.querySelectorAll(".mouseHover");

	document.addEventListener('mousemove', e => {
		const tgt = e.target;
		const inline = tgt.style.cursor || "Not defined"
		const computed = window.getComputedStyle(tgt)["cursor"]
		//console.log("Inline: ",inline,"Computed: ",computed)
		
		if (computed === 'pointer') {
			mouseBgCircle.style.opacity = "0%";
			mouseCircle.style.transform = "scale(2)";
		}
		else {
			mouseBgCircle.style.opacity = "100%";
			mouseCircle.style.transform = "scale(1)";
		}
	});
	
	document.addEventListener("click", () => {
		//mouseCircle.style.opacity = "0%";
		mouseBgCircle.style.opacity = "0%";
		mouseCircle.style.transform = "scale(2)";
			

		setTimeout(() => {
			mouseCircle.style.transform = "scale(1)";
			mouseBgCircle.style.opacity = "100%";
		}, 250);

		setTimeout(() => {
			mouseCircle.style.opacity = "100%";
		}, 500);

	});

	setInterval(() => {
		xp += ((mousex - xp) / 6);
		yp += ((mousey - yp) / 6);
		
		mouseCircle.style.left = xp + 'px';
		mouseCircle.style.top = yp + 'px';
		
	}, 20);

	setInterval(() => {
		xp += ((mousex - xp) / 12);
		yp += ((mousey - yp) / 12);	
		mouseBgCircle.style.left = xp + 'px';
		mouseBgCircle.style.top = yp + 'px';
		
	}, 100);

	setInterval(() => {
		
	}, 1000)
}
const pageChange = () => {
	const loadingTime = 2000;
	const body = document.querySelector("body");

	const menu = document.querySelector(".menu");
	const menuItems = menu.querySelectorAll(".item");
	const homeBtn = menu.querySelector("#home-btn");
	const aboutBtn = menu.querySelector("#about-me-btn");
	const projectsBtn = menu.querySelector("#projects-btn");

	const homePage = document.querySelector("#home-page");
	const aboutPage = document.querySelector("#about-me-page");
	const projectsPage = document.querySelector("#projects-page");

	const aboutToken = document.querySelector("#about-me-blob");
	const projectsToken = document.querySelector(".projects-bg");

	aboutBtn.addEventListener('click', () => {

		let currentPage;

		if (body.classList.contains('home')) {
			currentPage = 'home';
		}
		if (body.classList.contains('projects')) {
			currentPage = 'projects';
		}
		//menu.style.display = "none";
		menuItems.forEach(item => {
			item.classList.remove("active");
		});
		aboutBtn.classList.add("active");

		
		
		if (currentPage == 'home') {
			aboutToken.style.animation = `blob-expand-animation ${loadingTime}ms 1`;

			setTimeout(() => {

				body.classList.remove(...body.classList);
				body.classList.add("about-me");
				
			}, loadingTime * 2 / 3);
			setTimeout(() => {
				
				homePage.classList.remove('active');
				projectsPage.classList.remove('active');
				aboutToken.style.animation = "";
	
			}, loadingTime * 4 / 5);
			setTimeout(() => {
				
				aboutPage.classList.add('active');
				aboutToken.style.transform = "scale(0.8)";
	
			}, loadingTime * 5 / 5);

		}
		if (currentPage == 'projects') {
			body.classList.remove(...body.classList);
			body.classList.add("about-me");

			homePage.classList.remove('active');
			projectsPage.classList.remove('active');
			
			aboutPage.classList.add('active');
		}

		
		menu.style.display = "flex";
		//	console.log('click detected');
		
		//aboutToken.style.opacity = "100%";
		subMenuNav();
		scrollAboutMe();
	});
	homeBtn.addEventListener('click', () => {

		//menu.style.display = "none";
		let currentPage;

		if (body.classList.contains('home')) {
			currentPage = 'home';
		}
		if (body.classList.contains('about-me')) {
			currentPage = 'about-me';
		}

		menuItems.forEach(item => {
			item.classList.remove("active");
		});
		homeBtn.classList.add("active");

			
		// if (currentPage == 'about-me') {
		// 	homePage.classList.add('active');
		// 	aboutToken.style.animation = "blob-contract-animate 20s 20";

		// 	body.classList.remove(...body.classList);
		// 	body.classList.add("home");
			
			
		// 	setTimeout(() => {
				
		// 		aboutPage.classList.remove('active');
		// 		projectsPage.classList.remove('active');
		// 		window.scrollTo(0, 0);

		// 	}, 1 * loadingTime / 3);
		// 	// setTimeout(() => {
				
		// 	// }, 4 * loadingTime / 5);
		// 	// setTimeout(() => {
				
				
		// 	// }, 5 * loadingTime / 5);

		// 	aboutToken.style.animation = "";
		// 	menu.style.display = "flex";
		// }
		
		
		body.classList.remove(...body.classList);
		body.classList.add("home");

		aboutPage.classList.remove('active');
		projectsPage.classList.remove('active');
		homePage.classList.add('active');
		//console.log('click detected');

		window.scrollTo(0, 0);
		//scrollingEffectOnHome();
		//window.scrollY(0, 0);
		
	});
	projectsBtn.addEventListener('click', () => {

		menu.style.display = "none";
		menuItems.forEach(item => {
			item.classList.remove("active");
		});
		projectsBtn.classList.add("active");

		
		body.classList.remove(...body.classList);
		//body.classList.remove("projects");
		//body.classList.remove("about-me");
		body.classList.add("projects");
		aboutPage.classList.remove('active');
		homePage.classList.remove('active');
		projectsPage.classList.add('active');
		//console.log('click detected');

		window.scrollTo(0, 0);
		menu.style.display = "flex";
	});

	// mouseFunctions();
}
const subMenuNav = () => {

	window.addEventListener("scroll", () => {
		const subMenu = document.querySelector(".sub-menu");
		const subMenuItems = subMenu.querySelectorAll(".item");

		//console.log("scrolling...");

		subMenuItems.forEach(item => {
			const element = document.querySelector(item.getAttribute('data-target'));
			const top = element.getBoundingClientRect().top;

			//console.log("element: ", element);
			//console.log("top", top);

			if (top < 250) {

				subMenuItems.forEach(el => {
					el.classList.remove("active");
				})
				item.classList.add("active");
				
			}

		});
	});

}
const scrollAboutMe = () => {
	const subMenu = document.querySelector(".sub-menu");
	const subMenuItems = subMenu.querySelectorAll(".item");

	subMenuItems.forEach(item => {
		item.addEventListener("click", () => {
			console.log("click detected");
			const element = document.querySelector(item.getAttribute('data-target'));
			const top = element.offsetTop;

			console.log("element", element);
			console.log('top', top);


			window.scrollTo(0, top - 100);
		})
	})
}
const scrollingEffectOnHome = () => {
	
		const loadingTime = 2000;
		const body = document.querySelector("body");

		const menu = document.querySelector(".menu");
		const menuItems = menu.querySelectorAll(".item");
		const homeBtn = menu.querySelector("#home-btn");
		const aboutBtn = menu.querySelector("#about-me-btn");
		const projectsBtn = menu.querySelector("#projects-btn");

		const homePage = document.querySelector("#home-page");
		const aboutPage = document.querySelector("#about-me-page");
		const projectsPage = document.querySelector("#projects-page");

	const aboutToken = document.querySelector("#about-me-blob");
	const projectsToken = document.querySelector(".projects-bg");
	
	let previousScroll = 50;

	window.addEventListener("scroll", (e) => {
		
		if (body.classList.contains("home")) {
			console.log("scrolling");
			
			e.preventDefault();
			console.log(previousScroll - window.scrollY);

			if (window.scrollY > previousScroll) {
				menuItems.forEach(item => {
					item.classList.remove("active");
				});
				aboutBtn.classList.add("active");
		
				aboutToken.style.animation = `blob-expand-animation ${loadingTime}ms 1`;
		
				setTimeout(() => {
		
					body.classList.remove(...body.classList);
					body.classList.add("about-me");
					window.scrollTo(0, 0);
						
				}, loadingTime * 2 / 3);
				setTimeout(() => {
						
					homePage.classList.remove('active');
					projectsPage.classList.remove('active');
					aboutToken.style.animation = "";
			
				}, loadingTime * 4 / 5);
				setTimeout(() => {
						
					aboutPage.classList.add('active');
						
			
				}, loadingTime * 5 / 5);
			}
			
		}
		
		previousScroll = window.scrollY;
		
	},{
		passive: false
	});
}