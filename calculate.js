function calc() {
  let result;
  let averageTime = 1972;/*Work hour in 2021*/
  let data = getArrNumber();
  let inHour = data[0] / (averageTime/12);/*Average salary in one hour*/   
  if(data[1] >= data[3]){
    result = ((data[1] - data[2] - data[3]) * inHour + (data[2] * inHour * 1.3) + (data[4] * 500) + data[0]);
  }
  else{
    inHour = data[0] / data[3];
    result = ((data[1] - data[2] - data[3]) * inHour + (data[2] * inHour * 1.3) + (data[4] * 500) + data[0]);
  }
  
  if (!parseFloat(result)) {
    document.getElementById("result").innerHTML = "Вы допустили ошибку";
  } else {
    document.getElementById("result").innerHTML = `${result.toFixed(
      0
    )} руб.`;
  }
}


function getArrNumber() {
  const dataString = [
    "salary" /*0*/,
    "workTime" /*1*/,
    "wikendTime" /*2*/,
    "monthTime" /*3*/,
    "bonusCount" /*4*/,
  ];
  let dataValue = [];
  dataString.forEach((element) => {
    dataValue.push(getNumber(element));
  });
  return dataValue;
}

function getNumber(id) {
  let res = document.getElementById(id).value;
  if (parseFloat(res)) {
    return parseFloat(res);
  } else {
    return 0;
  }
}

function test() {
  console.log(getNumber("salary"));
}

function setOnLoad() {
  document.getElementById("monthTime").value = document.getElementById(
    "monthSelect"
  ).value;
}
function changeMonth() {
  document.getElementById("monthTime").value = document.getElementById(
    "monthSelect"
  ).value;
}
