btn.addEventListener("click", f_out);

let res = 0;
function f_out(){
	for (let i = 0; i < Number(A.value); i++) {

		elem = Number(D.value)/Math.pow((1 + Number(K.value)),(i+1));
		console.log(elem);
 		res += elem;
 		console.log(res);
}
result.innerHTML = res;
}  
