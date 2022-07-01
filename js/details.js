
let contantEle = document.querySelector(".courses-contant")
let data = JSON.parse(localStorage.getItem("data"))
console.log(data);
function draw() {
        contantEle.innerHTML = `<div class="card">
        <div class="card-body">
            <div class="card-image">
                <img src=${data.img} alt="">
            </div>
            <div class="card-info">
                <h3>${data.titel}</h3>
                <span> :التفاصيل  <span>${data.details}</span></span>
                <span> :السعر  <span>${data.price}</span></span>
                <p>من يوم ${data.startDate}</p>
                <p>الي يوم ${data.endDate}</p>
                <span><span> : ميعاد الامتحان </span>${data.examDate}</span>
                <button>سجل الأن</button>
            </div>
            
        </div>
    </div>`
    }

draw();
