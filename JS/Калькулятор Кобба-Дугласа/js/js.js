btn.addEventListener("click", f_out);

function f_out(){
Y.innerHTML = Number(A.value) * Math.pow(Number(L.value),Number(P.value)) * Math.pow(Number(K.value),(1 - Number(P.value)))
}  