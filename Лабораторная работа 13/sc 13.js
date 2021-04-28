let stud = function(name, age) {
    return {age: age,
    name: name}
}

var mas = []
let summ = function() {
    //const axios = require('axios');
    // let a = document.getElementById("1").value
    // let b = document.getElementById("2").value
    // let s = new stud(a,b);
    // let rt = axios.get()
    
    let rt = axios({
        method: 'get',
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
        responseType: 'application/json'
      }).then(resp => {
        let res = resp.data    
        console.log(res)
        let main = document.getElementById("main")
        
        res.forEach(q => {
            
        
        main.insertAdjacentHTML('beforeend', `<div class=\"ib card\"> ${q.ccy}: ${q.base_ccy} 
        <div> buy: ${q.buy} </div>
        <div>sale: ${q.sale} </div>
        </div>`)
        
    });
        })


    // console.log(s)
    // let f = JSON.stringify(s)
    // document.getElementById("3").value = "your json stud: \n" + f
}
let res = function() {
    document.getElementById("2").value = mas
    b = "mas"
}
