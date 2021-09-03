var origem = 12
var origem2 = 13
var municaomagnum = 6
var item1 = ""
var item2 = ""
var item3 = ""
var item4 = ""
var item5 = ""
var item6 = ""
var item7 = ""
var item8 = ""
var item9 = ""
var item10 = ""
var item11 = ""
var item12 = ""
var item13 = ""
var item14 = ""
var item15 = ""
var item16 = ""
var dinheiro = 0

municaomagnum = localStorage.getItem("municaomagnum")
item1 = localStorage.getItem("item1")
item2 = localStorage.getItem("item2")
item3 = localStorage.getItem("item3")
item4 = localStorage.getItem("item4")
item5 = localStorage.getItem("item5")
item6 = localStorage.getItem("item6")
item7 = localStorage.getItem("item7")
item8 = localStorage.getItem("item8")
item9 = localStorage.getItem("item9")
item10 = localStorage.getItem("item10")
item11 = localStorage.getItem("item11")
item12 = localStorage.getItem("item12")
item13 = localStorage.getItem("item13")
item14 = localStorage.getItem("item14")
item15 = localStorage.getItem("item15")
item16 = localStorage.getItem("item16")
dinheiro = localStorage.getItem("dinheiro")

var origem3 = [origem , origem2]
html(origem3)
function html(origem3){
var html=""

    html+="<tr><td>Nome</td><td>Tipo</td><td>Dano</td><td>Municao</td><td>Ataques</td><td>Alcançe</td><td>Defeito</td><td>Area</td></tr>"

    html+="<tr><td>Canivete</td><td>Lutar/Briga</td><td>1d4</td><td>X</td><td>1</td><td>Toque</td><td>1</td><td>X</td></tr>"

    html+="<tr><td>Rifle FN Fal</td><td>Armas/R.E</td><td>1d10+2d8+4</td><td>"+ municaomagnum +" <button onclick='atirarmagnum()'>Tiro</button><button onclick='racarregarmagnum()'>Recarregar</button></td><td>1(3)</td><td>110m</td><td>1</td><td>X</td></tr>"

    var htin = document.getElementById("tabeladanos")
    htin.innerHTML = html
}

html2(origem3)
function html2(origem3){
var html2=""

    html2+="<tr><td>"+item1  +"<input type='text' id='item1' placeholder='Item 1'><button onclick='invent1()'>Salvar</button></td><td>"+item2  +"<input type='text' id='item2' placeholder='Item 2'><button onclick='save2()'>Salvar</button></td><td>"+item3  +"<input type='text' id='item3' placeholder='Item 3'><button onclick='save3()'>Salvar</button></td><td>"+item4  +"<input type='text' id='item4' placeholder='Item 4'><button onclick='save4()'>Salvar</button></td></tr>"

    html2+="<tr><td>"+item5  +"<input type='text' id='item5' placeholder='Item 5'><button onclick='save5()'>Salvar</button></td><td>"+item6  +"<input type='text' id='item6' placeholder='Item 6'><button onclick='save6()'>Salvar</button></td><td>"+item7  +"<input type='text' id='item7' placeholder='Item 7'><button onclick='save7()'>Salvar</button></td><td>"+item8  +"<input type='text' id='item8' placeholder='Item 8'><button onclick='save8()'>Salvar</button></td></tr>"

    html2+="<tr><td>"+item9  +"<input type='text' id='item9' placeholder='Item 9'><button onclick='save9()'>Salvar</button></td><td>"+item10  +"<input type='text' id='item10' placeholder='Item 10'><button onclick='save10()'>Salvar</button></td><td>"+item11  +"<input type='text' id='item11' placeholder='Item 11'><button onclick='save11()'>Salvar</button></td><td>"+item12  +"<input type='text' id='item12' placeholder='Item 12'><button onclick='save12()'>Salvar</button></td></tr>"
    html2+="<tr><td>"+item13  +"<input type='text' id='item13' placeholder='Item 13'><button onclick='save13()'>Salvar</button></td><td>"+item14  +"<input type='text' id='item14' placeholder='Item 14'><button onclick='save14()'>Salvar</button></td><td>"+item15  +"<input type='text' id='item15' placeholder='Item 15'><button onclick='save15()'>Salvar</button></td><td>"+item16  +"<input type='text' id='item16' placeholder='Item 16'><button onclick='save16()'>Salvar</button></td></tr>"

    var htin2 = document.getElementById("itens")
    htin2.innerHTML = html2
}
html3(origem3)
function html3(origem3){
var html3=""

    html3+=dinheiro +"<input type='text' placeholder='Dinheiro' id='dinheiro'><button onclick='dinero()'>Salver</button>"

    var htin3 = document.getElementById("dindin")
    htin3.innerHTML = html3
}
function dineiro(){

    dinheiro = document.getElementById("dinheiro").value
    localStorage.setItem("dinheiro",dinheiro)

}

function atirarmagnum(){
  
municaomagnum = municaomagnum - 1
localStorage.setItem("municaomagnum",municaomagnum)

html(origem3)
}

function racarregarmagnum(){
    municaomagnum = municaomagnum + 20
localStorage.setItem("municaomagnum",municaomagnum)

html(origem3)
}

function invent1(){
    item1 = document.getElementById("item1").value
    localStorage.setItem("item1",item1)
}

function save2(){
    item2 = document.getElementById("item2").value
    localStorage.setItem("item2",item2)
}

function save3(){
    item3 = document.getElementById("item3").value
    localStorage.setItem("item3",item3)
}

function save4(){
    item4 = document.getElementById("item4").value
    localStorage.setItem("item4",item4)
}
function save5(){
    item5 = document.getElementById("item5").value
    localStorage.setItem("item5",item5)
}
function save6(){
    item6 = document.getElementById("item6").value
    localStorage.setItem("item6",item6)
}    
function save7(){
    item7 = document.getElementById("item7").value
    localStorage.setItem("item7",item7)
}
function save8(){
    item8 = document.getElementById("item8").value
    localStorage.setItem("item8",item8)
}
function save9(){
    item9 = document.getElementById("item9").value
    localStorage.setItem("item9",item9)
}
function save10(){
    item10 = document.getElementById("item10").value
    localStorage.setItem("item10",item10)
}
function save11(){
    item11 = document.getElementById("item11").value
    localStorage.setItem("item11",item11)
}
function save12(){
    item12 = document.getElementById("item12").value
    localStorage.setItem("item12",item12)
}
function save13(){
    item13 = document.getElementById("item13").value
    localStorage.setItem("item13",item13)
}
function save14(){
    item14 = document.getElementById("item14").value
    localStorage.setItem("item14",item14)
}
function save15(){
    item15 = document.getElementById("item15").value
    localStorage.setItem("item15",item15)
}
function save16(){
    item16 = document.getElementById("item16").value
    localStorage.setItem("item16",item16)
}