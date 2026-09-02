/**
 * ページ共通スクリプト
 * デザイン上必要な操作だけを、セクション単位で追加します。
 */
(() => {
  "use strict";

  document.documentElement.classList.add("is-js");

  document.querySelectorAll("[data-accordion]").forEach((item) => {
    const button = item.querySelector(".faq-item__question");
    const answer = item.querySelector(".faq-item__answer");

    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const willOpen = !item.classList.contains("is-open");

      item.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
      answer.setAttribute("aria-hidden", String(!willOpen));
    });
  });
})();
