var height = prompt("키를 입력하세요", "cm");
var weight = prompt("체중을 입력하세요", "kg");
var result = (height - 100) * 0.9;

var sign = weight < result ? "부족" : "초과";
if (weight == result) {
  sign = "적정";
}

if (sign != "적정") {
  document.write(
    "결과: 적정 체중은 " +
      result +
      "kg이며, 현재 적정 체중에서 " +
      Math.abs(weight - result) +
      "kg" +
      sign +
      "한 것을 알 수 있습니다."
  );
} else {
  document.write(
    "결과: 적정 체중은 " + result + "kg이며, 현재 적정 체중입니다."
  );
}
