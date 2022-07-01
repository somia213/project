let courses = [
    {id: 0, img: "../img/frontend.webp", titel: "front end", price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022" , details: "html , css , sass , botestrap , javascript , react js", examDate: "24/9/2022"},
    {id: 1,  img: "../img/frontend.webp",titel: "front end",price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022",details: "html , css , sass , botestrap , javascript , react js" , examDate: "24/9/2022"},
    {id: 2, img: "../img/frontend.webp", titel: "front end", price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022", details: "html , css , sass , botestrap , javascript , react js" , examDate:"24/9/2022"},
    {id: 3, img: "../img/frontend.webp", titel: "front end", price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022", details: "html , css , sass , botestrap , javascript , react js" , examDate:"24/9/2022"},
    {id: 4, img: "../img/frontend.webp", titel: "front end", price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022", details: "html , css , sass , botestrap , javascript , react js" , examDate:"24/9/2022"},
    {id: 5,  img: "../img/frontend.webp",titel: "front end", price: "200$", startDate: "22/9/2022" , endDate: "24/9/2022", details: "html , css , sass , botestrap , javascript , react js" , examDate:"24/9/20225"}
]
const container = document.getElementsByClassName("container")
let contantEle = document.querySelector(".courses-contant")
function draw() {
    courses.forEach(item=>{
        contantEle.innerHTML += `<div class="card">
        <div class="card-body">
            <div class="card-image">
                <img src=${item.img} alt="">
            </div>
            <div class="card-info">
                <h3>${item.titel}</h3>
                <span>${item.price}</span>
                <p>من يوم ${item.startDate}</p>
                <p>الي يوم ${item.endDate}</p>
                <button onclick='getData(${item.id})'>للتفاصيل اضغط هنا</button>
            </div>
            
        </div>
    </div>`
    }) 
}
draw();
function getData(id){
    courses[id]
    // console.log(courses[id])
    localStorage.setItem("data" , JSON.stringify(courses[id]))
    window.location = "details.html"

}
