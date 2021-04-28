let add = function() {
     let name = document.getElementById("name").value
     let age = (document.getElementById("age").value)
    
     console.log(name)
    axios({
        method: 'post',
        url: 'http://localhost:49980/api/users',
        data: {
            name: name,
            age: Number(age)
          }
      }).then(resp => {
        let res = resp.data  
        console.log(res)
        main.insertAdjacentHTML('beforeend', `<div id=\"qwe\" class=\"ib card\"> Name:${res.name} Age${res.age} 
        <div> Id: ${res.id} </div>
        </div>`)
      })
}

let del = function() {
    let id = document.getElementById("id").value
   
   axios({
       method: 'delete',
       url: `http://localhost:49980/api/users/${id}`,
     }).then(resp => {
       let res = resp.data  
       console.log(res)
       main.insertAdjacentHTML('beforeend', `<div id=\"qwe\" class=\"ib card\"> Name:${res.name} Age${res.age} 
        <div> Id: ${res.id} </div>
        </div>`)
     })
}
let get = function() {
    let id = document.getElementById("id").value
    
   axios({
       method: 'get',
       url: `http://localhost:49980/api/users/${id}`,
     }).then(resp => {
       let res = resp.data    
       console.log(res)
       main.insertAdjacentHTML('beforeend', `<div id=\"qwe\" class=\"ib card\"> Name:${res.name} Age${res.age} 
        <div> Id: ${res.id} </div>
        </div>`)
     })
}
let getAll = function() {
    
   axios({
       method: 'get',
       url: `http://localhost:49980/api/users`,
     }).then(resp => {
       let res = resp.data    
       console.log(res)
       res.forEach(u => {
        main.insertAdjacentHTML('beforeend', `<div id=\"qwe\" class=\"ib card\"> Name:${u.name} Age${u.age} 
        <div> Id: ${u.id} </div>
        </div>`)
       });
     })
}
