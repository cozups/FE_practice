// variables
let answer = [];
let currentRow = 0;
let userAnswer = [];

// dom element
const table = document.querySelector('tbody');
const submitButton = document.querySelector('button');
const userInputList = document.querySelectorAll('input');
// add events
submitButton.addEventListener('click', writeTable);

function tableRendering() {
  const tableRow = `
    <tr>
      <td align='center'></td>
      <td align='center'></td>
      <td align='center'></td>
      <td align='center'></td>
      <td align='center'></td>
    </tr>
  `;

  for (let i = 0; i < 5; i++) {
    table.innerHTML += tableRow;
  }
}

function writeTable(e) {
  e.preventDefault();

  if (currentRow >= 5) {
    return;
  }

  const row = table.querySelectorAll('tr')[currentRow];
  let tdList = row.querySelectorAll('td');

  for (let i = 0; i < 5; i++) {
    userAnswer.push(userInputList[i].value);
  }

  for (let i = 0; i < 5; i++) {
    tdList[i].innerText = userAnswer[i];
  }
  const isAnswer = checkAnswer(tdList);
  for (let i = 0; i < 5; i++) {
    userInputList[i].value = '';
  }
  if (isAnswer) {
    setTimeout(function () {
      alert('정답입니다!');
    }, 300);
  }
  userAnswer = [];
  currentRow++;
}

function setAnswer() {
  answer = ['ㅅ', 'ㅏ', 'ㄹ', 'ㅏ', 'ㅇ'];
}

function checkAnswer(tdList) {
  let isAnswer = true;
  for (let i = 0; i < 5; i++) {
    const inputChar = userInputList[i].value;
    let idx = answer.indexOf(inputChar);
    console.log(answer[i], inputChar, idx);
    if (idx >= 0) {
      // 글자가 있음
      if (idx === i || answer[i] === inputChar) {
        // 올바른 위치
        tdList[i].style.backgroundColor = 'green';
      } else {
        // 다른 위치
        tdList[i].style.backgroundColor = 'orange';
        isAnswer = false;
      }
    } else {
      // 글자가 없음
      tdList[i].style.backgroundColor = 'red';
      isAnswer = false;
    }
  }
  return isAnswer;
}

// execution
tableRendering();
setAnswer();

// 글자 하나 들어오면 다음 input으로 넘기기
$('input').on('keyup', function () {
  const charLimit = $(this).prop('maxlength');

  if ($(this).val().length >= charLimit) {
    $(this).next('input').focus();
    return false;
  }
});
