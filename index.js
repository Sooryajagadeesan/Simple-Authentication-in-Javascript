// database
var database =[]
let signupForm = document.querySelector("#signup-form")
let signinForm = document.querySelector("#signin-form")
let signup = document.querySelector(".signUp")
let signin = document.querySelector(".signIn")

signup.addEventListener('click',(e)=>{
    e.preventDefault();
    let user = {}
    let Name = signupForm.name.value;
    let Email= signupForm.email.value;
    let Password = signupForm.password.value;
    if((Name.length!==0 && Email.length !=0 && Password.length !=0)){
        user.name = Name;
        user.email = Email;
        user.password = Password;
        if(checkEmail(user.email)){
            alert("Email Already Registered, Please sign in !")
        }else{
        database.push(user);
        // database.forEach((user)=>(console.log(user,database.length)))
        }
        signupForm.name.value = ""
        signupForm.email.value= ""
        signupForm.password.value = ""
    }else{
        alert("Please Fill all the details")
    }
})

signin.addEventListener('click',(e)=>{
    e.preventDefault();
    let email = signinForm.email.value;
    let password = signinForm.password.value;
    if(email.length !=0 && password.length !=0){
        if(checkEmail(email)){
            if(checkPassword(email,password)){
                alert("Log in Succesful")
            }else{
                alert("Email and Password do not match")
            }
        }else{
            alert("Email not registered, Please sign up first !");
        }
        signinForm.email.value= ""
        signinForm.password.value = ""  
    }else{
    alert("Please Fill all the details")
}

})


function checkEmail(email){
    let status = false;
    for (let index = 0; index < database.length; index++) {
        const element = database[index];
        if(email == element.email){
            status = true;
            break;
        }
        
    }
    return status;

}

function checkPassword(email,password){
    let status =false;

    for(let i=0;i<database.length;i++){
        // console.log(`email : ${database[i].email}||||| Password : ${database[i].password}`)
        if(database[i]["email"] == email && database[i]["password"] == password){
            status = true;
            break;
        }
    }
    return status;

}

