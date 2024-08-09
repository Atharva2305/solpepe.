const dropdownContent = [];
dropdownContent[0] = document.getElementById("DropdownContent1");
dropdownContent[1] = document.getElementById("DropdownContent2");
dropdownContent[2] = document.getElementById("DropdownContent3");
dropdownContent[3] = document.getElementById("DropdownContent4");
function toggleDropdown1() {
     
     dropdownContent.forEach(dropdown => {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
     });
    // if (dropdownContent.style.display === "block") {
    //   dropdownContent.style.display = "none";
    // } else {
    //   dropdownContent.style.display = "block";
    // }
  }
  // var targedata = new Date('jan 1,2024 00:00:00').getTime();

  // function newyear(){
  //   var current= new Date().getTime();
  //   difference = targedata - current;

  //   var second = 1000;
  //   var minute = second*60;
  //   var hour = minute*60;
  //   var day = hour*24;

  //   var d = math.floor(difference / (day));
  //   var h = math.floor((difference % (day)) / (hour));
  //   var m = math.floor((difference % (day)) / (minute));
  //   var s = math.floor((difference % (day)) / (second));


  //   document.getElementById('day').innerText= d;
  //   document.getElementById('hour').innerText= h;
  //   document.getElementById('minute').innerText= m;
  //   document.getElementById('second').innerText= s;

  //   setInterval(function(){
  //     newyear();
  //   },1000)
 
  // }





  