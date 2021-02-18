$(document).ready(function () {
	//searchable dropdown to select country-select2 plugin
	$(".select-country-dd").select2({
		placeholder: "select country",
		allowClear: true,
		width: "resolve",
	});

	//clear button in dropdown
	window.addEventListener("load", () => {
		const button = document.querySelector(".clear");
		button.addEventListener("click", () => {
			document.querySelector("#date").value = "";
		});
	});
});
