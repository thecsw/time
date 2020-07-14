document.addEventListener("DOMContentLoaded",() => {
    let time = document.querySelector("#time");
    const day = 24 * 60 * 60 * 1000;

    let now = () =>  {
	let date = new Date();
	let start = new Date(date.getFullYear(), 0, 0, 0, 0, 0, 0)
	let diff = Math.round(Math.abs((date - start) / day));
	return diff + "; " + (date.getFullYear() + 10000).toLocaleString() + " H.E."
    }

    time.innerText = now();
});
