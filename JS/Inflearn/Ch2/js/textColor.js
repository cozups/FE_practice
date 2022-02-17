// h1 태그를 저장한 꼴
var heading = document.querySelector('#heading');
var state = "blue";
// h1 태그를 눌렀을 때 글자색을 red로 바꿔라
heading.onclick = function() {
    if(state == "blue"){
        heading.style.color = "red";
        state = "red";
    }
    else {
        heading.style.color = "blue";
        state = "blue";
    }
}