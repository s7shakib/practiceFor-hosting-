let light = document.querySelector("#lightbulb")
let btn = document.querySelector("button")
let btn1 = document.querySelector("#b")

let flag = 0;


btn.addEventListener("click",function(){



    if (flag === 0) {
     light.style.backgroundColor = "yellow"
     flag = 1
     btn1.innerHTML = "OFF"

    }else {

        light.style.backgroundColor = "transparent"
        flag = 0
        btn1.innerHTML = "ON"



    }

})
