// Accessing form elements by name & id, and assigning them variables.
const formValidation =() => {
    const surname = document.covidTestReg.surname;
    const name = document.covidTestReg.name;
    const birthday = document.covidTestReg.dob;
    const residence = document.covidTestReg.residence;
    const occupation = document.covidTestReg.occupation;
    const nationality = document.covidTestReg.nationality;
    const genderM = document.getElementById("male");
    const genderF = document.getElementById("female");
    const category = document.covidTestReg.category;
    
// Validating surname input to have only 1-16 alphabate charcters
let surRegex = /^[a-zA-Z\s]{1,16}$/;
if(surRegex.test(surname.value) == false){
    surname.style.border = "1px solid red";
    text = "This feild is required";
    document.getElementById("surnameAlert").innerHTML = text;
    // return false
} else {
    surname.style.border = "";
    text = "";
    document.getElementById("surnameAlert").innerHTML = text;
  }

// Validating name input to have only 1-16 alphabate charcters
let nameRegex = /^[a-zA-Z\s]{1,16}$/;
if(nameRegex.test(name.value) == false){
    name.style.border = "1px solid red";
    text = "This feild is required";
    document.getElementById("nameAlert").innerHTML = text;
    // return false
} else {
    name.style.border = "";
    text = "";
    document.getElementById("nameAlert").innerHTML = text;
  }

// ??Validating DOB to accept only a Patient who is at least One year old and at most 150 years old ??

// Date of Birth Validation to accept numbers in form of = DD/MM/YYYY
let dobRegex = /^(?:(?:(?:29([-/])02(?:\1)(?:(?:(?:1[8-9]|20)(?:04|08|[2468][048]|[13579][26]))|2000))|(?:(?:(?:0[1-9]|1[0-9]|2[0-8])([-/])(?:0[1-9]|1[0-2]))|(?:29|30)([-/])(?:0(?:1|[3-9])|(?:1[0-2]))|31([-/])(0[13578]|1[02]))(?:\2|\3|\4)(?:1[8-9]|20)\d\d))/;
if (dobRegex.test(birthday.value) == false) {
    birthday.style.border = "1px solid red";
    text = "Select Date of Birth";
    document.getElementById("dobAlert").innerHTML = text;
} else {
    birthday.style.border = "";  
    text = "";
    document.getElementById("dobAlert").innerHTML = text; 
  }

// Validating residence input to have only 1-20 alphabate charcters
let residenceRegex = /^[a-zA-Z\s]{1,20}$/;
if(residenceRegex.test(residence.value) == false){
    residence.style.border = "1px solid red";
    text = "This feild is required";
    document.getElementById("residenceAlert").innerHTML = text;
    // return false
} else {
    name.style.border = "";
    text = "";
    document.getElementById("residenceAlert").innerHTML = text;
  }

// Validating occupation input to have only 5-50 alphabate charcters
let occupationRegex = /^[a-zA-Z\s]{5,50}$/;
if(occupationRegex.test(occupation.value) == false){
    occupation.style.border = "1px solid red";
    text = "This feild is required";
    document.getElementById("occupationAlert").innerHTML = text;
    // return false
} else {
    name.style.border = "";
    text = "";
    document.getElementById("occupationAlert").innerHTML = text;
  }

// Validating nationality input to have only 5-50 alphabate charcters
let nationalityRegex = /^[a-zA-Z\s]{5,50}$/;
if(nationalityRegex.test(nationality.value) == false){
    nationality.style.border = "1px solid red";
    text = "This feild is required";
    document.getElementById("nationalityAlert").innerHTML = text;
    // return false
} else {
    name.style.border = "";
    text = "";
    document.getElementById("nationalityAlert").innerHTML = text;
  }

// Gender Validation = Gender must be selected
if(genderM.checked == false && genderF.checked == false){
    text = "*<b>Please select your gender.</b>";
    document.getElementById("genderAlert").innerHTML = text;
    // return false
} else {
    text = "";
    document.getElementById("genderAlert").innerHTML = text; 
    }

// Category Validation = Category selection is mandatory
if (category.value == "default") {
    category.style.border = "1px solid red";
    text = "Select Patient Category";
    document.getElementById("categoryAlert").innerHTML = text;
    // return false
} else {
    category.style.border = "";
    text = "";
    document.getElementById("categoryAlert").innerHTML = text;
    // return true
  }

// Prevent Submission of wrong data
if (surname.value == false 
    && name.value == false
    && birthday.value == false
    && residence.value == false 
    && occupation.value == false
    && nationality.value == false  
    && category.value == "default") {
    return false
} else {
    alert('Registration was successful !')
    return true
}

};