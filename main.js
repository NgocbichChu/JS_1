// Bài 1
const submitB1=document.getElementById("submitB1");
submitB1.onclick = function(){
    const day = document.getElementById("day").value *1;
    const salary=100000;
    var totalSalary = salary*day;
   // convert vnd
    const config = { style: "currency", currency:"VND"};
    const formated = new Intl.NumberFormat("vi-VN",config);
    
    var result = "";
    result += "<p class='alert alert-success'> Tiền lương là:" + formated.format(totalSalary)  +"</p>";
    var footerB1=document.getElementById("footerB1");
    footerB1.innerHTML=result;
};

// Bai 2
const submitB2 =document.getElementById("submitB2");
submitB2.onclick = function(){
    const value1 =document.getElementById("value1").value *1;
    const value2 =document.getElementById("value2").value *1;
    const value3 =document.getElementById("value3").value *1;
    const value4 =document.getElementById("value4").value *1;
    const value5 =document.getElementById("value5").value *1;
    
    var average = (value1+value2+value3+value4+value5)/5;

    var result="";
    result += "<p class='alert alert-primary' >Trung bình tổng là:  " + average;
    var footerB2=document.getElementById("footerB2");
    footerB2.innerHTML=result;

};
// Bai 3
const submitB3 =document.getElementById("submitB3");
submitB3.onclick = function(){
    const USD=document.getElementById("USD").value *1;
    const exchangeRateDiff = 23500;
    var rateOfExchange = USD * exchangeRateDiff;

    // convert vnd
    const config = { style: "currency", currency:"VND"};
    const formated = new Intl.NumberFormat("vi-VN",config);
    
    var result = "";
    result += "<p class='alert alert-success'> Tiền quy đổi là:" + formated.format(rateOfExchange)  +"</p>";
    var footerB3=document.getElementById("footerB3");
    footerB3.innerHTML=result;

};
// Bài 4
const submitB4 =document.getElementById("submitB4");
submitB4.onclick = function(){
    const length=document.getElementById("length").value*1;
    const width=document.getElementById("width").value*1;
    var acreage = length * width;
    var perimeter = (length+width)*2;
 
    var result="";
    result += "<p class='alert alert-primary' >Diện tích hình chữ nhật là:  " + acreage;
    result += "<p class='alert alert-primary' >Chu vi hình chữ nhật là:  " + perimeter;
    var footerB4=document.getElementById("footerB4");
    footerB4.innerHTML=result;
};
// Bài tập5
    const submitB5=document.getElementById("submitB5");
    submitB5.onclick = function(){
    const number=document.getElementById("number").value *1;

    const  donVi = Math.floor(number % 10);
    const chuc=Math.floor(number / 10);
    var sum = donVi + chuc;

    var result="";
    result += "<p class='alert alert-primary' >Tổng 2 ký số là:   " + sum;
    var footerB5=document.getElementById("footerB5");
    footerB5.innerHTML=result;

}
   