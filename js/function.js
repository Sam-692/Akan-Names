var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

function confirmDayofWeek(){
    var date=parseInt(document.getElementById("date").value);
    var month=parseInt(document.getElementById("month").value);
    var year=parseInt(document.getElementById("year").value);
    var gender=getGender();
    var day= new day(year +"/" + month +"/" + date);
    var whenBorn= day.getDate();
    var maleName;
    var femalename;
    var validate = (year > 0 && (month >0 && month <=12) && (date > 0 && date <= 31));
    // var validateSex = (gender !== "male" || gender !== "female");
    if (year <= 0 ) {
        alert("No such a year");
    }
    else if (month <= 0 || month > 12) {
        alert("Month should be between 1 and 12");
    }    
    else if (day <= 0 || day > 31){
        alert("Date should be between 1 and 31");
    }
    else if (validate == false) {
        alert("Invalid Input!!");
    }
    if(gender ==="male" && year > 0 && month > 0 || month < 13 && date > 0 || date < 32){
        maleName = maleNames[whenBorn];
    alert("You were born on "+dayOfWeek[whenBorn]+ " and your Akan name is "+maleName);
    }
    else if (gender === "female" && year > 0 && month > 0 || month < 13 && date > 0 || date < 32){
        femalename = femaleNames[whenBorn];
    alert("You were born on "+dayOfWeek[whenBorn]+ " and your Akan name is "+femalename);
    }
    else if (Math.ceil(result) == 0 && gender === 'female') {
    document.getElementById("outcome").innerHTML = 
    ("Born on Sunday,your akan name is " + girl[0]);
}
function getGender(){
    var gender = document.getElementsById("gender");
    for(i = 0; i < gender.length; i++)
        if(gender[i].checked){
            return(gender[i].value);
        }
    if(female.checked==true){
    alert("You were born on "+dayOfWeek[whenBorn]+ " and your Akan name is "+femaleNames[whenBorn])
    }
};

