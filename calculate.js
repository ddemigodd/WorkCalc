function calc() {
  let data = getArrNumber();
  let inHour = data[0] / data[3];
  let result =
    (data[1] - data[2]) * inHour + data[2] * inHour * 1.3 + data[4] * 500;
  if (!parseFloat(result)) {
    document.getElementById("result").innerHTML = "Вы допустили ошибку";
  } else {
    document.getElementById("result").innerHTML = `Итого ≈ ${result} рублей`;
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
