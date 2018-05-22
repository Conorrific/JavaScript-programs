var newPassword = document.getElementById("newPassword")
var confirmPassword = document.getElementById("confirmPassword")
var updateButton = document.getElementById("updateButton")
var message = document.getElementById("message")


console.log(newPassword)
console.log(confirmPassword)
console.log(updateButton)
updateButton.addEventListener("click",function(){
})

function changePassword() {
    console.log(newPassword.value)
    var newValue = newPassword.value
    var confirmValue = confirmPassword.value
    if (newValue == confirmValue) {
        message.innerHTML = "updatescript"
    } else {
        message.innerHTML = "Password not matching"
    }
}
