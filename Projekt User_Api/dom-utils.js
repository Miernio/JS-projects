const createInfoElement=(labelName,value)=>{
    const infoElement=document.createElement("div");
    const nameElement=document.createElement("strong");
    infoElement.classList.add('info-element');
    nameElement.innerText=labelName+": ";
    const valueElement=document.createElement("span");
    valueElement.innerText=value;
    infoElement.appendChild(nameElement);
    infoElement.appendChild(valueElement);
    return infoElement;
}

const createUserImgElement=(img)=>{
    const imgContainerElement=document.createElement("div");
    const imgElement=document.createElement("img");
    imgElement.src=img;
    imgContainerElement.appendChild(imgElement);
    return imgContainerElement;
}

const createUserInfoElement=(user)=>{
    const userInfoElement = document.createElement("li");
    userInfoElement.classList.add('user-info-element');
    userInfoElement.appendChild(createUserImgElement(user.photoImg));
    const userNameAndSurnameElement=document.createElement('div');
    const userEmailAndAgeElement=document.createElement('div');
    userNameAndSurnameElement.classList.add('user-info');
    userEmailAndAgeElement.classList.add('user-info')
    userNameAndSurnameElement.appendChild(createInfoElement('Imie',user.name));
    userNameAndSurnameElement.appendChild(createInfoElement('Nazwisko',user.surname));
    userInfoElement.appendChild(userNameAndSurnameElement);
    userEmailAndAgeElement.appendChild(createInfoElement('Email',user.email));
    userEmailAndAgeElement.appendChild(createInfoElement('Wiek',user.age));
    userInfoElement.appendChild(userEmailAndAgeElement);
    return userInfoElement;
}

const createListElement=(users)=>{
    const listElement=document.createElement("ul");
    users.forEach(user => {
        listElement.appendChild(createUserInfoElement(user));   
    });
    return listElement;
}

export const renderUserList=(users)=>{
    const rootElement=document.querySelector('#root');
    rootElement.appendChild(createListElement(users))
    console.log(users)
}