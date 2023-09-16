console.log("This is my Script");

// Input Field Style 
let inputField = document.getElementById("Email");

inputField.addEventListener('input',()=>{
    inputField.style.borderBottom = `5px solid ${RandomColor()}`;
    })  
//Random color function
function RandomColor(){
    let a_Color = "0123456789ABCDEF";
    let Color = "#";
    for(let i = 0; i < 6; i++){ 
    Color += a_Color[Math.floor(Math.random() * 16)];
    }
    return Color.toString();
}


//   function setRandomColor() {
//     $("#colorpad").css("background-color", getRandomColor());
//   }
// let result = {
//         "tag": "",
//         "free": true,
//         "role": false,
//         "user": "rohit0practice",
//         "email": "rohit0practice@gmail.com",
//         "score": 0.64,
//         "state": "deliverable",
//         "domain": "gmail.com",
//         "reason": "valid_mailbox",
//         "mx_found": true,
//         "catch_all": null,
//         "disposable": false,
//         "smtp_check": true,
//         "did_you_mean": "",
//         "format_valid": true
//       }

