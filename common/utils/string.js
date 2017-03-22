export const shift_str = function(str, empty_txt ="", suffix = "") {
	if(!str) return empty_txt;
	if(str == "") return empty_txt;
	return str + suffix;
}

export const split_str = function(str, f = '\n') {
	if(!str) return [""];
	let arr = str.split(f);
	let res = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] != "") res.push(arr[i]);
	}
	if(res.length == 0) res.push("");

	return res;
}
