document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".open-map-btn")
    .addEventListener("click", function () {
      document.querySelector(".sitemap-box").classList.add("on");
    });

  document
    .querySelector(".close-map-btn")
    .addEventListener("click", function () {
      document.querySelector(".sitemap-box").classList.remove("on");
    });

  // mobile nav
  // 모든 .main-mn 요소에서 on 클래스를 제거하는 함수
  function removeOnClasses() {
    document.querySelectorAll(".main-mn").forEach(function (e) {
      e.classList.remove("on");
    });
  }

  // 클릭 이벤트를 추가하는 함수
  function addClickListeners() {
    document
      .querySelectorAll(".main-mn:not(:first-child)")
      .forEach(function (element) {
        element.addEventListener("click", handleClick);
      });
  }

  // 클릭 이벤트를 제거하는 함수
  function removeClickListeners() {
    document
      .querySelectorAll(".main-mn:not(:first-child)")
      .forEach(function (element) {
        element.removeEventListener("click", handleClick);
      });
  }

  // 클릭 이벤트 핸들러
  function handleClick(event) {
    const element = event.currentTarget;

    // 만약 클릭된 요소가 이미 on 클래스를 가지고 있으면 제거
    if (element.classList.contains("on")) {
      element.classList.remove("on");
    } else {
      // 그렇지 않으면 모든 .main-mn 요소에서 on 클래스를 제거하고 클릭된 요소에 on 클래스를 추가
      removeOnClasses();
      element.classList.add("on");
    }
  }

  // 화면 크기에 따라 이벤트 리스너를 추가하거나 제거하는 함수
  function checkWindowSize() {
    if (window.innerWidth <= 1190) {
      addClickListeners();
    } else {
      removeOnClasses();
      removeClickListeners();
    }
  }

  // 윈도우가 리사이즈 될 때마다 checkWindowSize 함수 호출
  window.addEventListener("resize", checkWindowSize);

  // 페이지 로드 시 한 번 확인
  checkWindowSize();
});
