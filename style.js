window.onload = () => {
	mouseFunctions();
	pageChange();
	
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
	const homeBtn = document.querySelector("#home-btn");
	const aboutBtn = document.querySelector("#about-me-btn");

	const homePage = document.querySelector("#home-page");
	const aboutPage = document.querySelector("#about-me-page");

	const aboutToken = document.querySelector("#about-me-blob");

	aboutBtn.addEventListener('click', () => {

		aboutToken.style.animation = `blob-expand-animation ${loadingTime}ms 1`;
		setTimeout(() => {
			body.classList.remove("home");
			body.classList.add("about-me");
			
		}, loadingTime * 2 / 3);
		setTimeout(() => {
			
			//aboutPage.classList.add('active');
			homePage.classList.remove('active');
			aboutToken.style.animation = "";
			//body.classList = "";
			//body.classList.add("about-me");
			//body.className = "about-me";

		}, loadingTime * 4 / 5);
		setTimeout(() => {
			
			aboutPage.classList.add('active');
			

		}, loadingTime * 5 / 5);
		
		console.log('click detected');
		
		//aboutToken.style.opacity = "100%";
	});

	homeBtn.addEventListener('click', () => {

		body.classList.remove("home");
		body.classList.remove("about-me");
		body.classList.add("home");
		aboutPage.classList.remove('active');
		homePage.classList.add('active');
		console.log('click detected');
	});
}