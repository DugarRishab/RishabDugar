window.onload = () => {

	let mousex = 0, mousey = 0;
	let xp = 0; yp = 0;

	document.addEventListener("mousemove", e => {
		mousex = e.pageX - 20;
		mousey = e.pageY - 20;
	});

	const mouseCircle = document.querySelector(".circle");
	const mouseBgCircle = document.querySelector(".bg-circle");
	const mouseHoverText = document.querySelectorAll(".mouseHover");

	// mouseHoverText.forEach(item => {
	// 	item.addEventListener("mouseover", () => {
	// 		mouseBgCircle.style.opacity = "0%";
	// 		mouseCircle.style.transform = "scale(2)";
	// 	});
	// 	item.addEventListener("mousemouve", () => {
	// 		mouseBgCircle.style.opacity = "0%";
	// 		mouseCircle.style.transform = "scale(2)";
	// 	});

	// 	item.addEventListener("mouseout", e => {
	// 		e.preventDefault();

	// 		mouseBgCircle.style.opacity = "100%";
	// 		mouseCircle.style.transform = "scale(1)";
	// 	});

	// });

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