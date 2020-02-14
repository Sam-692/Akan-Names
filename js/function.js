var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
function confirmDayofWeek (){
    var date=parseInt(document.getElementById("date").value);
    var month=parseInt(document.getElementById("month").value);
    var year=parseInt(document.getElementById("year").value);
    var gender=getGender();
    var day= new day(year +"/" + month +"/" +"date")
    
}