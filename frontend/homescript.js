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


// var card=document.getElementsByClassName(demo-card-wide. mdl-card);
function showMyProfile(){
    document.getElementsByClassName("demo-card-wide. mdl-card").style.display="block";
}

function closeprofile(){
    document.getElementsByClassName().style.display="none";
    document.getElementsById("card").style.display="none";

}
document.getElementById("btn_close").addEventListener("click", closeprofile);
document.getElementsByClassName("mdl-card__menu").addEventListener("click", closeprofile);
