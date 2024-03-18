const nameAnswer = document.getElementById("name");
const ageAnswer = document.getElementById("age");
const genderAnswer = document.getElementById("gender");
const etcAnswer = document.getElementById("etc");

let answer = {
  이름: "",
  나이: "",
  성별: "",
  기타: "",
};

// console.log(answer);

nameAnswer.addEventListener("change", function () {
  answer.이름 = this.value;
  // console.log("이름:", answer.이름);
  console.log(answer);
});

ageAnswer.addEventListener("change", function () {
  answer.나이 = this.value;
  // console.log("나이:", answer.나이);
  console.log(answer);
});

genderAnswer.addEventListener("change", function () {
  answer.성별 = this.value;
  // console.log("성별:", answer.성별);
  console.log(answer);
});

etcAnswer.addEventListener("change", function () {
  answer.기타 = this.value;
  // console.log("기타:", answer.기타);
  console.log(answer);
});

// 데이터 저장
document.querySelector("#data-save").addEventListener("click", function () {
  localStorage.setItem("응답", JSON.stringify(answer));
  document.querySelector(".save-complete").style.display = "block";

  setTimeout(function () {
    document.querySelector(".save-complete").style.display = "none";
  }, 1500);
});

// // 데이터 저장

// 데이터 표시
document.querySelector("#data-view").addEventListener("click", function () {
  let createP = document.createElement("p");
  let parseData = JSON.parse(localStorage.getItem("응답"));

  createP.classList.add("view-complete");
  createP.style.display = "block";
  // createP.innerText = JSON.parse(localStorage.getItem("응답")).이름;
  createP.innerText =
    "이름: " +
    parseData.이름 +
    " , " +
    "나이: " +
    parseData.나이 +
    " , " +
    "성별: " +
    parseData.성별 +
    " , " +
    "기타: " +
    parseData.기타;

  document.querySelector(".guide-box").appendChild(createP);

  setTimeout(function () {
    createP.remove();
  }, 2000);
});
// //데이터 표시

// 데이터 삭제
document.querySelector("#data-delete").addEventListener("click", function () {
  localStorage.removeItem("응답", JSON.stringify(answer));
  document.querySelector(".delete-complete").style.display = "block";
  setTimeout(function () {
    document.querySelector(".delete-complete").style.display = "none";
  }, 1500);
});
// //데이터 삭제
