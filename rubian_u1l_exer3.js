
const password1 = "i<3CMSC100";
const password2 = "i<3CMSC100";
const Username = "Clyde";

function validation (password1, password2, Username) {
    if (password1.length >= 8 && password2.length >= 8) {
      if (password1 == password2) {
        if ((/[A-Z]/.test(password1) && /[0-9]/.test(password1)) && (/[A-Z]/.test(password2) && /[0-9]/.test(password2))) {
          return reversePass(Username, password1);
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


function reversePass(Username, password1) {
    const strReverse = [...password1].reduce((x,y) => y.concat(x));
    console.log(`{name: "${Username}", new password:"${strReverse}"}`);

}


function passStorage (Username, password1, password2) {
   
    if (validation(password1, password2, Username)) {
        console.log(`storePassword("${Username}", "${password1}", "${password2}")`);
        return {
            name: Username,
            newpassword: reversePass(Username, password1)
        };
    } else {
        console.log(`storePassword("${Username}", "${password1}", "${password2}")`);
        return "Wrong Password!";
    }
}

passStorage(Username, password1, password2);