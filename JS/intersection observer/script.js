// target element
const cards = document.querySelectorAll('.card');

// observer 생성
const observer = new IntersectionObserver(
  (entries) => {
    // 교차 영역에 있을 때 'show' 클래스 토글
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

// 각 엘리먼트에 intersection observer 등록
cards.forEach((card) => {
  observer.observe(card);
});
