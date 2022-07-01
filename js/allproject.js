




// صفحة طباعة التقارير



        var create = $(".newRow:eq(0)").clone()
    

function addData() {
    if ($(this).attr("plus") == "0") {
        $(".table-data").append(create)
        $(this).attr("plus","1")
    } else  {
    var newrow = $(".table-data").find(".newRow").last().children().children(); 
    var ccc = $(".table-data").find(".newRow").last().clone();
    var appenrOw = $(".table-data").append(ccc);
    var  old = $(".table-data").find(".newRow").last();
    var removedata = old.children().children().val("")
    }
    var indexrow = $(".newempy") 
    if (indexrow.length >= 17) {
        $(".donereport").show(400)
        $("#alert").children("h3").text("تم إكمال التقرير بنجاح")
        $(this).unbind();   
    } 
    }
    $(".done").click(function() {
    $(".table-data").find(".newRow").remove()
    $(".table-data").append(create) 
    $(".table-data").find(".newRow").children().children().val("")
    $(".donereport").hide(400)
    $(".plusRow").click(addData)
    })  


    $(document).keypress(function(e) {
    var enter = e.which;
    if(enter == 13){
    $(".donereport").hide(400)
    $(".table-data").find(".newRow").remove()
    $(".table-data").append(create)
    $(".table-data").find(".newRow").children().children().val("")
    $(".plusRow").click(addData)
}   
})



function sendData() {
    var data = $(".table-data").find(".newRow").children().children().last().val()
    if(data == "") {
        $(".donereport").show(400)
        $("#alert").children("h3").text("يجب عليك إدخال البيانات")
        $("#alert").addClass("alert-danger")
        $("#alert").removeClass("alert-success")
    
    } else {
        $(".donereport").show(400)
        $("#alert").children("h3").text("تم إرسال البيانات بنجاح")
        $("#alert").addClass("alert-success")
        $("#alert").removeClass("alert-danger")
        $(".plusRow").unbind()
    }
    }

    $(".sendData").click(sendData)

$(".plusRow").click(addData)


// صفحة طباعة التقارير




// صفحة إدارة الحضور والإدارة



$(".nameCourSe").click(function() {
    $(".coureseName").focus()
})




function correctad() {
    $(this).parent().siblings().eq(1).html("<i class='fa-solid fa-circle-check' style='font-size: 20px;color: green;'><i>")
}




$(".yes").click(correctad)

$(".no").click(uncorrect) 

function uncorrect() {
    $(this).parent().siblings().eq(1).html("<i class='fa-solid fa-circle-xmark' style='font-size: 20px;color: red;'><i>")
}


// create new data
var createNewData = $(".manageRow:eq(0)").clone()


function createNewdata() {

    if($(this).attr("plusData") == "0") {
        var addnewdata = $(".datasheet").append(createNewData);
        $(this).attr("plusData","1")
        $(".yes").click(correctad)
        $(".no").click(uncorrect) 
    } else {
        var cloneLastDate = $(".datasheet").find(".manageRow").last().clone()
        var appendHTML = $(".datasheet").append(cloneLastDate);
        $(".manageRow").last().children().children("input").val("")
        $(".manageRow").last().find(".showIcon").html("")
        $(".yes").click(correctad)
        $(".no").click(uncorrect) 
    } 
    var lengthrowData = $(".manageRow").length;
    if (lengthrowData >= 17) {
        $(".donereport").show(400)
        $("#alert").children("h3").text("تم إكمال البيانات بنجاح")
         $(this).unbind(); 

    } 
}

$(".createNewdata").click(createNewdata)


// create new data


// create new course


function createNewCourse() {
    var lengthrowCreate = $(".manageRow").length;
    if (lengthrowCreate > 1) {
    $(".manageRow").not(":first").remove()
        $(".manageRow").eq(0).children().find(".showIcon").html("")
        $(".manageRow").eq(0).children().find("input").val("")
        $(".coureseName").val("")
    } 
        
    
 }

 $(".createNewCourse").click(createNewCourse)
 
// create new course


// صفحة إدارة الحضور والإدارة
