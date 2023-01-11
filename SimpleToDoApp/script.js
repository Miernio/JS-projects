let TaskList=new Array();
let TaskStatus=new Array();
const ToDoBtn=document.querySelector('#todo');

window.addEventListener("load",DataFromLocalStorage);
ToDoBtn.addEventListener("click",ToDoApp);

function DataFromLocalStorage(){
    if(localStorage.getItem('TaskListInMiernioToDoApp')!=""){
        TaskList=localStorage.getItem('TaskListInMiernioToDoApp').split(',');
        TaskStatus=localStorage.getItem('TaskStatusInMiernioToDoApp').split(',');
    }else{
        //pass
 }
    DisplayTask();
}

function AddNewTask(){
    let Task=document.getElementById('task').value;
    TaskList.push(Task);
    TaskStatus.push('0');
    console.log("Pomyślno dodano zadanie: "+TaskList[TaskList.length-1]+" Ze statusem: "+TaskStatus[TaskStatus.length-1]);
    //console.log(TaskList.length);
}

function DisplayTask(){
    document.getElementById('nieroz').innerHTML="";
    document.getElementById('roz').innerHTML="";
    document.getElementById('zak').innerHTML="";
    for(let i=0;i<TaskList.length;i++){
        if(TaskStatus[i]=='0'){
            document.getElementById('nieroz').innerHTML+="<li>"+TaskList[i]+"<button type='button' onclick='DelateTask("+i+")'>X</button><button type='button' onclick='ToStarted("+i+")'>-></button></li>";
        }
        else if(TaskStatus[i]=='1'){
            document.getElementById('roz').innerHTML+="<li>"+TaskList[i]+"<button type='button' onclick='DelateTask("+i+")'>X</button><button type='button' onclick='ToFinished("+i+")'>-></button><button type='button' onclick='ToNotStarted("+i+")' id='doprawej'><-</button></li>";
        }
        else if(TaskStatus[i]=='2'){
            document.getElementById('zak').innerHTML+='<li>'+TaskList[i]+"<button type='button' onclick='DelateTask("+i+")'>X</button><button type='button' onclick='ToStarted("+i+")'><-</button></li>";
        }else{
            //pass 
        }    
    }
}
ToStarted=(licz)=>{
    TaskStatus[licz]='1';
    DisplayTask();
    SaveLocalStorage();
}
ToNotStarted=(licz)=>{
    TaskStatus[licz]='0';
    DisplayTask();
    SaveLocalStorage();
}
ToFinished=(licz)=>{
    TaskStatus[licz]='2';
    DisplayTask();
    SaveLocalStorage();
}
DelateTask=(licz)=>{
    TaskStatus[licz]='3';
    DisplayTask();
    SaveLocalStorage();
}
function ToDoApp(){
    AddNewTask();
    DisplayTask();
    SaveLocalStorage();
}
function SaveLocalStorage(){
    localStorage.setItem('TaskListInMiernioToDoApp',TaskList);
    localStorage.setItem('TaskStatusInMiernioToDoApp',TaskStatus);
}