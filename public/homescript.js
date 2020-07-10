// import {MDCList} from '@material/list';

// const list = new MDCList(document.querySelector('.mdc-list'));

// import {MDCRipple} from '@material/ripple';

// const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));


// //card
// import {MDCRipple} from '@material/ripple';

// const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//   return new MDCRipple(el);
// });

// // select
// import {MDCSelect} from '@material/select';

// const select = new MDCSelect(document.querySelector('.mdc-select'));

// select.listen('MDCSelect:change', () => {
//   alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });

// profile caRD
// var card=document.getElementsByClassName(demo-card-wide. mdl-card);
var btnmap=document.getElementById("btn_showmap");
var enter=document.getElementById("btn_enterroom");
function showMyProfile(){
    document.getElementById("demo-card-wide-profile").style.display="flex";
    document.getElementById("demo-card-wide-enterroom").style.display="none";
    document.getElementById("demo-card-wide-roomsetting").style.display="none";
    document.getElementById("demo-card-wide-studyhistory").style.display="none";
    btnmap.style.display="none";
    enter.style.display="none";
}

function closeprofile(){
    // document.getElementById("btn_close").style.backgroundColor="green";
    document.getElementById("demo-card-wide-profile").style.display="none";
    btnmap.style.display="block";
    enter.style.display="block";
}
document.getElementById("btn_closeprofile").addEventListener("click", closeprofile);


//  room setting card
function showRoomSetting(){
    document.getElementById("demo-card-wide-roomsetting").style.display="flex";
    document.getElementById("demo-card-wide-enterroom").style.display="none";
    document.getElementById("demo-card-wide-profile").style.display="none";
    document.getElementById("demo-card-wide-studyhistory").style.display="none";
    btnmap.style.display="none";
    enter.style.display="none";
}

function closeRoomSetting(){
    // document.getElementById("btn_close").style.backgroundColor="green";
    document.getElementById("demo-card-wide-roomsetting").style.display="none";
    btnmap.style.display="block";
    enter.style.display="block";
}
document.getElementById("btn_close-roomsettings").addEventListener("click", closeRoomSetting);

//study history card
function showStudyHistory(){
  document.getElementById("demo-card-wide-studyhistory").style.display="flex";
  document.getElementById("demo-card-wide-enterroom").style.display="none";
  document.getElementById("demo-card-wide-profile").style.display="none";
  document.getElementById("demo-card-wide-roomsetting").style.display="none";
  btnmap.style.display="none";
  enter.style.display="none";
}

function closeStudyHistory(){
  // document.getElementById("btn_close").style.backgroundColor="green";
  document.getElementById("demo-card-wide-studyhistory").style.display="none";
  btnmap.style.display="block";
  enter.style.display="block";
}
document.getElementById("btn_close-studyhistory").addEventListener("click", closeStudyHistory);



/* <script> */
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
// </script>




// TIME PICKER
var dialog = new mdDateTimePicker.default({
    type: 'time'
  });
var toggleButton = document.getElementById('btntimepicker');
toggleButton.addEventListener('click', function() {
dialog.toggle();
});



//enter room btn
function showEnterStudyroom(){
  document.getElementById("demo-card-wide-enterroom").style.display="flex";
  document.getElementById("demo-card-wide-profile").style.display="none";
  document.getElementById("demo-card-wide-roomsetting").style.display="none";
  document.getElementById("demo-card-wide-studyhistory").style.display="none";
  btnmap.style.display="none";
  enter.style.display="none";
}
function closeEnterStudyroom(){
  document.getElementById("demo-card-wide-enterroom").style.display="none";
  btnmap.style.display="block";
  enter.style.display="block";
}
// document.getElementById("btn_close_enterroom").addEventListener("click", closeEnterStudyroom);


function enterstudyroom(){
  window.location.href="room1.html";
}

function showmap(){
  document.getElementById("wmap").style.display="block";
}

function hidemap(){
  document.getElementById("wmap").style.display="none";
}

