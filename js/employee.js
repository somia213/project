const form = document.getElementById("form");
const container = document.getElementById("container")
const input = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const error = document.getElementById("error");
const listValue1 = [];
const listValue2 = [];
const listValue3 = [];



// -------------------------------------------
//  start add new cources
// -------------------------------------------
form.addEventListener("submit" , (eo)=> {
    eo.preventDefault()
    
    const task = `<div class="course">

    <span class="icon-star icon"></span>
    <p class="p1">  ${input1.value } </p>
    <p class="p2">  ${input2.value } </p>
    <p class="p3">  ${input3.value } </p>
   <p class="price">: السعر</p>
   <p class="info">... تفاصيل الكورس ...</p>
    <span class="icon-trash icon"></span>

  </div>`

  if(input1.value!="" & input2.value!="" & input3.value!=""){

    listValue1.push(input1.value);
    listValue2.push(input2.value);
    listValue3.push(input3.value);
    container.innerHTML = "" ;
    for(var x=0 ,  y=0 , z=0 ; x < listValue1.length , y < listValue2.length , z< listValue2.length ; x++ , y++ , z++){
         
    container.innerHTML+=task;

}

console.log(listValue1);
console.log(listValue2);
console.log(listValue3);
input1.value="";
input2.value="";
input3.value="";
error.innerHTML="";}
    

else{
    error.innerHTML="*من فضلك ادخل البيانات*"
}
});
// -------------------------------------------
//  end add new cources
// -------------------------------------------




//  star click on (icon-trash icon , icon-star icon ,icon-star icon orange)

container.addEventListener("click" , (eo)=> {
    switch (eo.target.className){ 
       case "icon-trash icon" :
    eo.target.parentElement.remove();
   break;
    
        case "icon-star icon" :
            eo.target.classList.add("orange")
            container.prepend(eo.target.parentElement)
        break;

        case "icon-star icon orange":
            eo.target.classList.remove("orange")
            container.append(eo.target.parentElement)
         break

            default :
            break;
        
        }
        
    })
       //  end click on (icon-trash icon , icon-star icon ,icon-star icon orange)
   



  