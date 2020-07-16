document.addEventListener("DOMContentLoaded", () => {
    let time = document.querySelector("#time");
    let sub = document.querySelector("#sub");
    const day = 24 * 60 * 60 * 1000;

    setTime = () => {
	let now = new Date();
	let start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start +
	    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
	
	time.innerText =
	    Math.floor(diff / day) + "; " + (now.getFullYear() + 10000) + " H.E.";
	sub.innerText = (now.getHours() * 100 + now.getMinutes())
	    .toString()
	    .padStart(4, "0");
    }

    setTime();
    setInterval(setTime, 60 * 1000);
});
