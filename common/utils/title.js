import browser from './browser';

const title = function (title) {
	document.title = title;

	if(browser.versions.ios) {
		let iframe = document.createElement("iframe");
		iframe.src="http://res.fangstar.net/wxqy/img-bed/2016-11-29/583d22660912c.ico";
		iframe.addEventListener("load", function() {
			setTimeout(function() {
				iframe.removeEventListener("load", function() {});
				iframe.parentNode.removeChild(iframe);
			}, 0);
		});

        document.body.appendChild(iframe);
	}
}

export default title;