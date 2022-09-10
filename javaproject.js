 const todoForm= document.querySelector(".form-todo");
 const todoInput =document.querySelector(".form-todo input[type='text']");
 const todolist= document.querySelector(".todo-list");
 
 todoForm.addEventListener("submit",function(e){
    //  console.log("form submitted");
    e.preventDefault();
    const newTodoText=todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml= `
    <span class="text">${newTodoText}</span>
<div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
</div>`;
newLi.innerHTML =newLiInnerHtml;
todolist.append(newLi);
    todoInput.value="";
 });

 todolist.addEventListener("click",(e)=>{
    //  console.log(e.target);  
   if(e.target.classList.contains("remove")){
       const targetedli=e.target.parentNode.parentNode;
       targetedli.remove();
   }
   if (e.target.classList.contains("done")){
   
    const lispan =e.target.parentNode.previousElementSibling;
   lispan.style.textDecoration= "line-through";
}
 });


