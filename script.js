//your JS code here. If required.
function showalert() {
let first=document.querySelector("#FirstName");
let last=document.querySelector("#LastName");
let phone=document.querySelector("#PhoneNumber");
let email=document.querySelector("#EmailId");

let message = "firstName:"+first.value+"LastName:"+last.value+"PhoneNumber:"+phone.value+"EmailID:"+email.value

	alert(message);
}