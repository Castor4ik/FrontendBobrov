
var testId = 0;
var res = [];
var bal = 0;
var trueAnsw = [1, 2, 0, 3, 3]
var quest = {
    0:{
        text: `. Вышедшая в 2018 году биографическая драма «First man», в русской локализации получившая название «Человек на луне», рассказывает о жизни ЭТОГО ЧЕЛОВЕКА.`,
        0: "Луис Армстронг",
        1: "Неил Армстронг",
        2: "Юрий Гагарин",
        3: "Лэнс Армстронг",
    },
    1:{
        text: `20 сентября 1796 года в своем прощальном обращении к нации ОН завещал «поддерживать мир и согласие со всеми странами и иметь поменьше политических связей`,
        0: "Леонид Кравчук",
        1: "Джордж Флойд",
        2: "Джон Вашингтон",
        3: "Адам Смит",
    },
    2:{
        text: `12 декабря 2011 года премьер-министр Норвегии Йенс Столтенберг прибыл на Южный полюс, чтобы отметить столетие ЕГО экспедиции.`,
        0: "Руаль Амудсен",
        1: "Умберто Нобиле",
        2: "Роберт Скотт",
        3: "Фритьоф Нансен",
    },
    3:{
        text: `Когда после получения первой в истории нобелевской премии по физике принц-регент Баварии наградил ЕГО дворянским титулом и приставкой «фон», он, будучи скромным человеком, отказался. Да и приставка не понравилась, наверно.`,
        0: "Эрнест Резерфорд",
        1: "Нильс Бор",
        2: "Антони Беккерель",
        3: "Вильгельм Рентген",
    },
    4:{
        text: `Защищая свой титул в 2018 году, ОН сыграл 6:6 с Фабио Каруаной, поэтому решающей оказалась партия быстрых шахмат, в которой ОН победил.`,
        0: "Анатолий Карпов",
        1: "Гарри Каспаров",
        2: "Михаил Максимов",
        3: "Магнус Карлсен",
    }
}
let summ = function() {
    //const axios = require('axios');
    document.getElementById("1").value
    document.getElementById("2").value
    testId++;
    
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            res.push(i) 
            console.log(res)
        }
        radios[i].checked = false
    }
    if (testId<5){
    document.getElementById("q").textContent = quest[testId]["text"]
    document.getElementById("0").textContent = quest[testId]["0"]
document.getElementById("1").value = quest[testId]["1"]
document.getElementById("2").textContent = quest[testId]["2"]
document.getElementById("3").textContent = quest[testId]["3"]
    }
    else {
        for (let i =0; i<5;i++)
        {
            if (+res[i] === +trueAnsw[i]) {bal++;}
        }
        
        if (bal < 5){
        window.open('https://www.youtube.com/watch?v=qeAEdU4p5Cg')
        }
        else {
            document.getElementById("q").textContent = "Вы справились с тестом"
        }
    }


    let rt = axios({
        method: 'get',
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
        responseType: 'application/json'
      })
    


    // console.log(s)
    // let f = JSON.stringify(s)
    // document.getElementById("3").value = "your json stud: \n" + f
}
setTimeout(() => {
    document.getElementById("q").textContent = quest["0"]["text"]
    document.getElementById("0").textContent = quest["0"]["0"]
document.getElementById("1").value = quest["0"]["1"]
document.getElementById("2").textContent = quest["0"]["2"]
document.getElementById("3").textContent = quest["0"]["3"]
}, 200);



let cc = function (r) {document.getElementById("bc").style.backgroundColor = "#" + ((+r)*8773 % 1000000); 
r++
setTimeout(() => {
    cc(r)
}, 10);
}
cc(1)
