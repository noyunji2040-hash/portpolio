

//슬라이드 시작
const track = document.getElementById("slideTrack");
const totalSlides = 4; // 복제 포함
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // 마지막 복제 슬라이드 도달 시 → 처음으로 순간 이동
  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      requestAnimationFrame(() => {
        currentIndex = 0;
      });
    }, 600); // 트랜지션 끝나고 리셋
  }
}

setInterval(nextSlide, 3000);
//슬라이드 끝

//타아핑 애니메이션효과
const text =
  "안녕하세요. 멋진 웹디자인과 웹퍼블리셔가 되기위해 끊임없이 성장하고 노력하고 있는 노윤지입니다.맡은 일에 책임감을 가지고 끝까지 해내며, 피드백을 통해 더 나은 결과를 만들어가는 과정을 소중하게 생각합니다.단순한 웹이 아닌, 목적을 가진 디자인을 만드는 사람이 되고 싶습니다."; // 타이핑할 문구
let index = 0;
let speed = 100; // 글자 타이핑 속도 (밀리초 단위)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

//슬라이드

const container2 = document.querySelector(".container2");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  const slides2 = document.querySelectorAll(".slide2");

  container2.append(slides2[0]);
});

next.addEventListener("click", () => {
  const slides2 = document.querySelectorAll(".slide2");

  container2.prepend(slides2[slides2.length - 1]);
});




