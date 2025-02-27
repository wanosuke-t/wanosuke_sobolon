// ドロワーメニュー
const drawerIcon = document.getElementById("js-drawer-button");
const drawerContent = document.getElementById("js-drawer-content");

drawerIcon.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("is-checked");
  drawerContent.classList.toggle("is-checked");
});

// スムーススクロール
document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      drawerIcon.classList.remove("is-checked");
      drawerContent.classList.remove("is-checked");
    });
  });

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const scrollSpeed = 1000;
    const targetId = anchor.getAttribute("href");
    const targetElement =
      targetId === "#"
        ? document.documentElement
        : document.querySelector(targetId);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    if (targetElement) {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// フェードアニメーション
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");

inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});
