let question1 = document.getElementById("question1")
let question2 = document.getElementById("question2")
let finish = document.getElementById("finish")
let reset = document.getElementById("reset")

let answer1 = "Doctor Taiwo"
let answer2 = "2007"

finish.addEventListener("click", function() {
    if(question1.value === answer1 && question2.value === answer2) {
        reset.textContent = "The password and E-mail is admin@mtelohimhospital.org and the password is mtelohim"
    }
    else if (question1.value === "" && question2.value === "") {
        reset.textContent = "Please, you have to answer all questions before submitting"
    }
    else {
        reset.textContent = "Sorry, You got all questions wrong, please meet your tech consultant for help"
    }
})
