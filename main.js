const accountButton  = document.getElementById("first-nav");
const passwordButton = document.getElementById("second-nav");
const accountContent = document.getElementById("content-one")
const passwordContent = document.getElementById("content-two")

accountButton.addEventListener('click', accountButtonToggle)
passwordButton.addEventListener('click', passwordButtonToggle)

function accountButtonToggle(){
    if(accountButton.style.display === "block"){
        accountContent.style.flexDirection = "column"
    }
    else {passwordContent.style.display = "none";
        accountContent.style.display = "block"
        };

    accountButton.classList.add("nav:hover")
}

function passwordButtonToggle(){
    if(passwordButton.style.display === "block"){
        passwordContent.style.display = "flex"
    }
    else{accountContent.style.display = "none";
        passwordContent.style.display = "block"
    };

    passwordButton.classList.add("nav:hover")
}