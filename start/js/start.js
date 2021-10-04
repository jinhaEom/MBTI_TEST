const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
// const 는 변수를 상수로 만들어줌. var 도 사용 할 수 있음 ,
//querySelecter 는 문서에서 css 선택자에 대응되는 값을 선택해주는 기능.
function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
  }, 450);
}
