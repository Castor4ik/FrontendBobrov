btn.addEventListener("click", f_out);

  function f_out (){
    console.log(Number(a0.value));
    console.log(Number(r.value));
    console.log(Number(p.value));

      if (Number(r.value) <= Number(a0.value)) {
          result.innerHTML ="Экономика будет стабильно возрастать";}
      else if (Number(r.value) <= Number(p.value)) {
          result.innerHTML ="Экономика будет стабильно уменьшаться и в определенный момент ВВП станет ниже нуля";}
      else {
        result.innerHTML ="Такой темп роста невозможен для данной экономики";}
  }
