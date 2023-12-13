const cl = console.log;

const signupform = document.getElementById("signupform")
const fnameControl = document.getElementById("fname")
const lnameControl = document.getElementById("lname")
const emailControl = document.getElementById("email")
const contactControl = document.getElementById("contact")
const stdId = document.getElementById("stdId")

let stdArray = [];

const templating = (arr) => {
    let result = ``;
    arr.forEach((std, i) => {
        result += `<tr>
                     <td>${i + 1}</td>
                     <td>${std.fname}</td>
                     <td>${std.lname}</td>
                     <td>${std.email}</td>
                     <td>${std.contact}</td>
                  </tr>`
    })
    stdId.innerHTML = result;
}

const onStdAdd = (eve) => {
    eve.preventDefault()

    let stdObj = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value
    }
    stdArray.push(stdObj)
    // cl(stdArray)
    cl(`form submitted !!!`, stdObj, stdArray);
    signupform.reset()
    templating(stdArray);
    
}


signupform.addEventListener("submit", onStdAdd)