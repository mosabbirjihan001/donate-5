function checkInput(id){
    const donation = document.getElementById(id).value;
    if(isNaN(donation) || donation === '' || donation <= 0){
        alert("Invalid Input Amount");
        return 0;
    }
    else{
        return parseFloat(donation);
    }
}

function dateTime(){
    const currentDate = new Date();
    return `Date : ${currentDate.toString()}`;
}