let ToDoApp;
let AddNewTask;
let TaskList=new Array();
let TaskStatus=new Array();

DataFromLocalStorage=()=>{
    if(localStorage.getItem('TaskList')!=""){
        TaskList=localStorage.getItem('TaskList').split(',');
        TaskStatus=localStorage.getItem('TaskStatus').split(',');
    }else{
        //pass
    }
    DisplayTask();
}

AddNewTask=()=>{
    let Task=document.getElementById('task').value;
    TaskList.push(Task);
    TaskStatus.push('0');
    console.log("Pomyślno dodano zadanie: "+TaskList[TaskList.length-1]+" Ze statusem: "+TaskStatus[TaskStatus.length-1]);
    //console.log(TaskList.length);
}
DisplayTask=()=>{
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
ToDoApp=()=>{
    AddNewTask();
    DisplayTask();
    SaveLocalStorage();
}
SaveLocalStorage=()=>{
    localStorage.setItem('TaskList',TaskList);
    localStorage.setItem('TaskStatus',TaskStatus);
}
