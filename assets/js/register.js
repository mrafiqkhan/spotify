// registration form
const regForm = document.getElementById("registerForm");
//login form
const logForm = document.getElementById("loginForm");
// loginForm childrens
const inputsElementOfLogForm = logForm.getElementsByTagName("input");
//register form children
const inputsElementOfRegForm = regForm.getElementsByTagName("input");

// hidelogin
const hideLog = document.getElementById("hideLogin");
//hideregister
const hideReg = document.getElementById("hideRegister");

document.addEventListener("DOMContentLoaded", () => {
  for (const el of inputsElementOfLogForm) {
    if (typ(el) === "text" || typ(el) === "password") {
      el.addEventListener("blur", (e) => {
        let element = e.target;
        validateLoginFields(element)
      });
      el.addEventListener("click", (e) => {
        let element = e.target;
        element.parentNode.childNodes[1].innerHTML = "";
      });
    }
  }
  for (const el of inputsElementOfRegForm) {
    if (typ(el) === "text" || typ(el) === "password" || typ(el) === "email") {
      el.addEventListener("blur", (e) => {
        let element = e.target;
        validateRegistrationFields(element)
      });
      el.addEventListener("click", (e) => {
        let element = e.target;
        element.parentNode.childNodes[1].innerHTML = "";
      });
    }
  }



  hideLog.addEventListener("click", hideLoginForm);
  hideReg.addEventListener("click", hideRegistrationForm);
  // targeting the element on blur event inside register form
  // document.querySelector("#registerForm").addEventListener("blur", (e) => {
  //   console.log(e.target);
  // });





  // //loging form blur event get target and validate field
  // // targeting the element on blur event inside register form
  // document.querySelector("#loginForm").addEventListener("blur", (e) => {
  //   console.log(e.target);
  // });


});


function validateLoginFields(el) {
  if (nme(el) === 'loginUsername' || nme(el) === 'loginPassword') {
    checkIfEmpty(el);
  }
}

function validateRegistrationFields(el) {
  if (nme(el) === 'username' || nme(el) === 'firstname' || nme(el) === 'lastname' || nme(el) === 'email' || nme(el) === 'email2' || nme(el) === 'password' || nme(el) === 'password2') {
    checkIfEmpty(el);
  }
}

function checkIfEmpty(el) {
  let value = el.value;
  if (value === "") {
    let span = el.parentNode.childNodes[1];
    el.classList.remove("checked");
    span.innerHTML = "*no empty filed allowed";
  }
  if (value !== "") {
    el.parentNode.childNodes[1].innerHTML = "";
    el.classList.add("checked");
  }
}



// returns type attribute of the element
function typ(el) {
  return el.getAttribute("type");
}
// returns the name attribute of the element
function nme(el) {
  return el.getAttribute("name");
}


/**
 * function hides the login form and shows the regsiteration form
 */
function hideLoginForm() {
  logForm.style.display = 'none';
  regForm.style.display = 'block';
}
/**
 * function hides the regsiteration form and shows the login form
 */
function hideRegistrationForm() {
  regForm.style.display = 'none';
  logForm.style.display = 'block';

}
//
// function validateField(el, el2 = null, type) {
//   return type === 'username' ? /^([a-z0-9]{5,25})$/.test(el.value) : false;
//   return type === 'firstname' ? /^([a-zA-Z]{5,25})$/.test(el.value) : false;
//   return type === 'lastname' ? /^([a-zA-Z]{5,25})$/.test(el.value) : false;
//   return type === 'email' ? /^([a-z0-9]{5,25})$/.test(el.value) : false;
//   return type === 'email2' ? el.value === el2.value : false;
//   return type === 'password' ? /^([a-z0-9]{5,25})$/.test(el.value);
//   return type === 'password2' ? /^([a-z0-9]{5,25})$/.test(el.value);
//   return type === 'username' ? /^([a-z0-9]{5,25})$/.test(el.value);
// }


// $(document).ready(function () {

//   $("#registerForm").ready(function () {
//     let arr = $("#registerForm .errorMessage");

//     for (const element of arr) {
//       if (element.innerHTML !== "") {
//         $("#loginForm").hide();
//         $("#registerForm").show();
//       }
//     }

//     let inputEl = $("input[type='text'],input[type='email'],input[type='password']");
//     for (const ele of inputEl) {
//       if (ele.value !== "") {
//         $(ele).addClass("checked");
//       }
//     }
//   });

//   $("#loginForm").ready(function () {
//     let arr = $("#loginForm .errorMessage");

//     for (const element of arr) {
//       if (element.innerHTML !== "") {
//         $("#registerForm").hide();
//         $("#loginForm").show();
//       }
//     }
//   });

//   $("#hideLogin").click(function (event) {
//     event.preventDefault();
//     $("#loginForm").hide();
//     $("#registerForm").show();
//   });
//   $("#hideRegister").click(function (event) {
//     event.preventDefault();
//     $("#registerForm").hide();
//     $("#loginForm").show();
//   });
//   $("input[type='text'],input[type='email'], input[type='password']").click(function () {
//     let el = $("#loginContainer .errorMessage");
//     for (const element of el) {
//       element.innerHTML = "";
//     }
//   });
//   $("input[type='text'],input[type='email'], input[type='password']").blur(function (event) {

//     let val = event.target.value;
//     let el = event.target;
//     if (val !== "") {
//       $(el).addClass("checked");
//     } else {
//       $(el).removeClass("checked");
//     }
//   });

// });