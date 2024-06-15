let Main_form_js = document.getElementById("Main_form");

let array_user = [];

function array_Form(
  FullName,
  Passward,
  Email,
  Date_of_birth,
  gender,
  phone_number,
  chronic_diseases
) {
  this.user_name = FullName;
  this.user_Passward = Passward;
  this.user_Email = Email;
  this.user_Date = Date_of_birth;
  this.user_gender = gender;
  this.user_phone = phone_number;
  this.user_chronic = chronic_diseases;
}
let characters_Passward_p_js = document.getElementById("characters_Passward_p");
let Capital_Passward_p_js = document.getElementById("Capital_Passward_p");
let Number_Passward_p_js = document.getElementById("Number_Passward_p");
let Special_Characters_p_js = document.getElementById("Special_Characters_p");
let Date_of_birth_id_js = document.getElementById("Date_of_birth_id");
let Phone_number_id_js = document.getElementById("phone_number_id");
let Passward_p_div_js = document.getElementById("Passward_p_div");
Main_form_js.Passward.addEventListener("input", function checkPassword() {
  let Verification_Passward = Main_form_js.Passward.value;
  Passward_p_div_js.style.display = "inline";
  if (/[A-Za-z\d@$!%*?&]{8,}/.test(Verification_Passward)) {
    characters_Passward_p_js.style.color = "green";
  } else {
    characters_Passward_p_js.style.color = "";
  }
  if (/[A-Z]/.test(Verification_Passward)) {
    Capital_Passward_p_js.style.color = "green";
  } else {
    Capital_Passward_p_js.style.color = "";
  }
  if (/\d/.test(Verification_Passward)) {
    Number_Passward_p_js.style.color = "green";
  } else {
    Number_Passward_p_js.style.color = "";
  }
  if (/(?=.*[@$!%*?&])/.test(Verification_Passward)) {
    Special_Characters_p_js.style.color = "green";
  } else {
    Special_Characters_p_js.style.color = "";
  }
});
function form(Hospital_System) {
  Hospital_System.preventDefault();
  let Main_form_js = Hospital_System.target;

  let paragraph_card_hospital_js = document.createElement("p");
  let FullName_js = Main_form_js.FullName.value;
  let Passward_js = Main_form_js.Passward.value;
  let Email_js = Main_form_js.Email.value;
  let Date_of_birth_js = Main_form_js.Date_of_birth.value;
  let gender_js = Main_form_js.gender.value;
  let phone_number_js = Main_form_js.phone_number.value;
  let chronic_diseases_js = Main_form_js.chronic_diseases.value;

  let FullName_id_js = document.getElementById("FullName_id");
  FullName_id_js.innerHTML = "";
  if (/\s/.test(FullName_js)) {
    FullName_id_js.innerHTML = "The name must be without spaces";
    FullName_id_js.style.color = "red";
    return;
  }
  let Email_id_js = document.getElementById("Email_id");
  Email_id_js.innerHTML = "";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email_js)) {
  } else {
    Email_id_js.innerHTML =
      "Please enter the email correctly, for EX : aa@gmail.com";
    Email_id_js.style.color = "red";
    return;
  }
  if (/[A-Za-z\d@$!%*?&]{8,}/.test(Passward_js)) {
  } else {
    return;
  }
  if (/[A-Z]/.test(Passward_js)) {
  } else {
    return;
  }
  if (/\d/.test(Passward_js)) {
  } else {
    return;
  }
  if (/(?=.*[@$!%*?&])/.test(Passward_js)) {
  } else {
    return;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(Date_of_birth_js)) {
  } else {
    Date_of_birth_id_js.innerHTML =
      "Enter your birthday in this format: YYYY-MM-DD";
    return;
  }
  if (/07\d{8}/.test(phone_number_js)) {
  } else {
    Phone_number_id_js.innerHTML = "Must be 10 numbers starting with 07";
    return;
  }

  let user_p = new array_Form(
    FullName_js,
    Passward_js,
    Email_js,
    Date_of_birth_js,
    gender_js,
    phone_number_js,
    chronic_diseases_js
  );
  array_user.push(user_p);
  localStorage.setItem("information", JSON.stringify(array_user));

  let gititem_information = localStorage.getItem("information");
  let obj_information = JSON.parse(gititem_information);
  // if (obj_information[obj_information.length - 1].user_Email == Email_js) {
  //   alert("daad");
  // }
  let card_js = document.getElementById("card");
  let All_Card_js = document.createElement("div");
  card_js.appendChild(All_Card_js);
  let img = document.createElement("img");
  img.setAttribute("src", "Photo/logo.png");
  All_Card_js.setAttribute("class", "All-Card");
  All_Card_js.appendChild(img);
  All_Card_js.appendChild(paragraph_card_hospital_js);
  paragraph_card_hospital_js.innerHTML =
    "Username  : " +
    obj_information[obj_information.length - 1].user_name +
    "<br><br>" +
    "Passward : " +
    obj_information[obj_information.length - 1].user_Passward +
    "<br><br>" +
    "Email : " +
    obj_information[obj_information.length - 1].user_Email +
    "<br><br>" +
    "Date of birth : " +
    obj_information[obj_information.length - 1].user_Date +
    "<br><br>" +
    "Gender : " +
    obj_information[obj_information.length - 1].user_gender +
    "<br><br>" +
    "Phone Number : " +
    obj_information[obj_information.length - 1].user_phone +
    "<br><br>" +
    "Chronic diseases : " +
    obj_information[obj_information.length - 1].user_chronic;
}
Main_form_js.addEventListener("submit", form);
