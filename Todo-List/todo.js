//Tüm elementleri seçme
const form=document.querySelector("#todo-form");
const todoInput =document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firsCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    //Tüm event listenerlar
    form.addEventListener("submit",addTodo);
}
function addTodo(e){

    const newTodo=todoInput.value.trim();//trim->baştaki ve sondaki boşlukları silme
    
    if(newTodo===""){
        showAlert("danger","Lütfen bir todo girin!");
    }
    else{
        addTodoUI(newTodo);
        showAlert("success","Todo başarıyla eklendi.")
    }

    e.preventDefault();//Form tekrardan sayfaya yönlenmesin.
}

function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firsCardBody.appendChild(alert);
    
    //setTimeout
    setTimeout(function(){
        alert.remove();
    },1000);
}


function addTodoUI(newTodo){
    //String değerini list item olarak UI'a ekler.

    //list item oluşturma
    const listItem=document.createElement("li");
    //link oluşturma
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class='fa fa-remove></i>";

    listItem.className="list-group-item d-flex justify-content-between";


    //text node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo liste listItem ekleme
    todoList.appendChild(listItem);
    todoInput.value="";

}
