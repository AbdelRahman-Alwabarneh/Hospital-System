let Main_form_js = document.getElementById("Main_form");

let array_user = [];

function array_Form(
  FullName,
  Passward,
  Date_of_birth,
  gender,
  phone_number,
  chronic_diseases
) {
  this.user_name = FullName;
  this.user_Passward = Passward;
  this.user_Date = Date_of_birth;
  this.user_gender = gender;
  this.user_phone = phone_number;
  this.user_chronic = chronic_diseases;
}

function form(Hospital_System) {
  Hospital_System.preventDefault();
  let Main_form_js = Hospital_System.target;
  let card_js = document.getElementById("card");
  let All_Card_js = document.createElement("div");
  card_js.appendChild(All_Card_js);
  let img = document.createElement("img");
  img.setAttribute("src", "Photo/logo.png");
  All_Card_js.setAttribute("class", "All-Card");

  let paragraph_card_hospital_js = document.createElement("p");
  let FullName_js = Main_form_js.FullName.value;
  let Passward_js = Main_form_js.Passward.value;
  let Date_of_birth_js = Main_form_js.Date_of_birth.value;
  let gender_js = Main_form_js.gender.value;
  let phone_number_js = Main_form_js.phone_number.value;
  let chronic_diseases_js = Main_form_js.chronic_diseases.value;
  All_Card_js.appendChild(paragraph_card_hospital_js);
  All_Card_js.appendChild(img);

  let user_p = new array_Form(
    FullName_js,
    Passward_js,
    Date_of_birth_js,
    gender_js,
    phone_number_js,
    chronic_diseases_js
  );
  array_user.push(user_p);
  localStorage.setItem("information", JSON.stringify(array_user));

  let gititem_information = localStorage.getItem("information");
  let obj_information = JSON.parse(gititem_information);

  paragraph_card_hospital_js.innerHTML =
    "Full Name : " +
    obj_information[obj_information.length - 1].user_name +
    "<br><br>" +
    "Passward : " +
    obj_information[obj_information.length - 1].user_Passward +
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
