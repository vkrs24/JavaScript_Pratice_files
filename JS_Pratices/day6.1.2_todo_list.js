const todolist=[{
    name:'',
    date:''
}];
function add_todo(){
    let name=document.querySelector('.todo_name').value;
    let date=document.querySelector('.todo_date').value;
    todolist.push({name,date});
    document.querySelector('.todo_name').value="";
    document.querySelector('.todo_date').value="";
    display_todo(todolist);
    
}
function display_todo(){
    let todo_html_list="";
    for(i=1;i<todolist.length;i++){
        const todo_object=todolist[i];
        const {name,date}=todo_object;
        const html=`
        
        <div class="div_name">${name}</div>
        <div class="div_date"> ${date}</div>
       <button class="delete_btn" onclick="delete_todo(${i}),display_todo() ">Delete</button>
        `;
        todo_html_list+=html;
    }
    document.querySelector('.display_todolist').innerHTML=todo_html_list;
}
function delete_todo(i){
    todolist.splice(i,1);
}