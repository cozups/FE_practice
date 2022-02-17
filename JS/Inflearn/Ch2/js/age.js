function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력하세요.", "YYYY");
    var age = 0;

    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
}