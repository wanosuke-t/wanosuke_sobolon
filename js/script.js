// ドロワーメニュー
const drawerIcon = document.getElementById("js-drawer-button");
const drawerContent = document.getElementById("js-drawer-content");

if (drawerIcon && drawerContent) {
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
}

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
