let year = 600;
if (year % 4 == 0 && (year % 100 == 0 && year % 400 == 0)){
    console.log("leapyear")
}
else {
    console.log("not a leapyear")
}