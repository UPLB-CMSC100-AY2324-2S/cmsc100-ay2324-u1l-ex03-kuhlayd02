
const password1 = "pass1234";
const password2 = "pass1234";
const name = "Clyde";

function validation (password1, password2, name) {
    if (password1.length >= 8 && password2.length >= 8) {
      if (password1 == password2) {
        if ((/[A-Z]/.test(password1) && /[0-9]/.test(password1)) && (/[A-Z]/.test(password2) && /[0-9]/.test(password2))) {
          return reversePass(name, password1)
        } else {
          return console.log("Inavalid Password!");
        }
      } else {
        return console.log("Wrong Password!");
      }
    } else {
      return console.log("Insufficient Number of Strings!");
    }
  }


function reversePass(name, password1) {
    const strReverse = [...password1].reduce((x,y) => y.concat(x));
    console.log("{name" + name + "," + "new password:" + strReverse + "}");

}


validation(password1, password2);