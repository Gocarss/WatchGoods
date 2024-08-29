function validasi(event){
    
    // Mencegah form disubmit
    event.preventDefault();

    document.getElementById("fullnameError").textContent = ""
    document.getElementById("emailError").textContent = ""
    document.getElementById("regionError").textContent = ""
    document.getElementById("messageError").textContent = ""
    document.getElementById("agreeError").textContent = ""

    var isValid = true

    var fullname = document.getElementById("fullname").value
    console.log(fullname);
    // Validasi 1
    if(fullname.length < 6){
        isValid = false
        document.getElementById("fullnameError").textContent = "Fullname must be 6 character or longer"
    }

    var email = document.getElementById("useremail").value
    // Validasi 2
    if(!email.includes("@")){
        isValid = false
        document.getElementById("emailError").textContent = "Email must have @"
    }

    // Validasi 3
    if(email.length < 3){
        isValid = false
        document.getElementById("emailError").textContent = "Email must be 3 character or longer"
    }

    var region = document.getElementById("countryregion").value
    // Validasi 4
    if(region.length <= 0){
        isValid = false
        document.getElementById("regionError").textContent = "Must be filled"
    }

    var message = document.getElementById("usermessage").value
    // Validasi 4
    if(message.length < 5){
        isValid = false
        document.getElementById("messageError").textContent = "Message must be 5 characters or more"
    }

    var agree = document.getElementById("useragree").checked
    if(!agree){
        isValid = false
        document.getElementById("agreeError").textContent="Have to Agree"
    }

    if(isValid){
        document.getElementById("registerForm").submit()
    }
    
}