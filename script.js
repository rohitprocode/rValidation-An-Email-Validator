// console.log("This is my Script");

let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "rohit0practice",
  "email": "rohit0practice@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}

submit.addEventListener('click',async(e)=>{
  e.preventDefault();
  disp.innerHTML = '<img style="width: 50px; margin-left: 155px;" src="/Img/Spinner-0.5s-290px.svg" alt="" srcset="">'
  let Key = "ema_live_M8Z60N2II1P62Tdu89gWwwTkNeufPd3aJn91iPdn";
  let Email = document.getElementById("Email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${Key}&email=${Email}`
  let res = await fetch(url);
  let result = await res.json();
  let str = "";
  for(key of Object.keys(result)){
    if((result[key] !== "") && (result[key] !== " ")){
      str += `<div>${key} : ${result[key]}</div>`; 
    }
  }
  disp.innerHTML = str; 
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

//Function call for random color
Email.addEventListener('input', ()=>{
  Email.style.borderBottom = `5px solid ${RandomColor()}`;
})

