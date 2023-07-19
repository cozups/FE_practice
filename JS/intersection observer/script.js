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
    rootMargin: '100px',
  }
);

const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) {
    return;
  }
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector('.card:last-child'));
}, {});

lastCardObserver.observe(document.querySelector('.card:last-child'));
const cardContainer = document.querySelector('.card-container');

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'New Card';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
}

// 각 엘리먼트에 intersection observer 등록
cards.forEach((card) => {
  observer.observe(card);
});
