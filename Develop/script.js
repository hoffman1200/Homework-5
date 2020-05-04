var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
// Text hour var
var nineAm = $("#text9am");
var tenAm = $("#text10am");
var elevenAm = $("#text11am");
var twelvePm = $("#text12pm");
var onePm = $("#text1pm");
var twoPm = $("#text2pm");
var threePm = $("#text3pm");
var fourPm = $("#text4pm");
var fivePm = $("#text5pm");
var sixPm = $("#text6pm");
var sevenPm = $("#text7pm");

var hour = moment().format('h');
var userInput;
var hourSpan;
var hourString = $(".hour").text().split(" ");

// Date and Hour
$("#currentDay").text(currentDate + " " + currentHour);

function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("9am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("1pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("2pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("3pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("4pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("5pm"))
  fivePm.val(init5);
  
  var init6 = JSON.parse(localStorage.getItem("6pm"))
  sixPm.val(init6);
  
  var init7 = JSON.parse(localStorage.getItem("7pm"))
  sevenPm.val(init7);
} 

function background () {
  for (i = 0; i < hourString.length; i++) {
    if (i === 11) {break;}
    var element = hourString[i];
    element = parseInt(element);
    hour = (parseInt(hour));
    console.log(hour);
    console.log(parseInt(element));

    if (hour > element) {
      console.log("mayor que");
    } else if(hour < element) {
      console.log("menor que");
    } else {
      console.log("igual que");
    }


  }
  
}
$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
    
  })
    // $("#button9am").on("click", function() {
    //     var input = $.trim(nineAm.val());
    //     console.log("9 am " + input);
    //     localStorage.setItem("9 am", JSON.stringify(input));
    //     localInput = JSON.parse(localStorage.getItem("9 am"));
    //     console.log("Local Storage: " + localInput);
        
    //   });

    // $("#button10am").on("click", function() {
    //     var input = $.trim(tenAm.val());
    //     console.log("10 am " + input);
    //     localStorage.setItem("10 am", JSON.stringify(input));
    //     localInput = JSON.parse(localStorage.getItem("10 am"));
    //     console.log("Local Storage: " + localInput);

    // })
    
});