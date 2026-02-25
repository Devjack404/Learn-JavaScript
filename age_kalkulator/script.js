let calculate = document.querySelector('.calculate');
const result = document.getElementById('result'); 
const birthDay = document.getElementById('birthday');


function calculateAge() {
  const birthDayValue = birthDay.value; 
  if(birthDayValue === ""){
    alert('Please enter your birthday !');
  }
  else{
    const age = getAge(birthDayValue);
    result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge (birthDayValue){
  const currentDate = new Date();
  const birthDayDate = new Date(birthDayValue);
  let age = currentDate.getFullYear() - birthDayDate.getFullYear();
  const month = currentDate.getMonth() - birthDayDate.getMonth()
  

  if(
    month < 0 || 
    (month === 0 && currentDate.getDate() < birthDayDate.getDate())
  ) {
    age--;
  }
  return age;
}

calculate.addEventListener('click', calculateAge);
