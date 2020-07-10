mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

// @use "@material/textfield";

// @include textfield.core-styles;


import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
//@mixin floating-label-float-transition($duration-ms, $timing-function)

// import {MDCRipple} from '@material/ripple';

// //const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));


