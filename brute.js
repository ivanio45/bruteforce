
let s = "колокольчик колокол";
let subs = "колокол";

let result=new Array();
for (let i = 0; i <= s.length - subs.length; i++) {
	let len=0;
	for (let j = 0; j < subs.length; j++){
		len+=1;
		if (s[i + j] != subs[j]) {
			break;
		}
	}
	if (len == subs.length) {
	  result.push(i);
	}
}
console.log(result);