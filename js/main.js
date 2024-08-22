const body=document.querySelector("body"),pageControl=e=>{body&&(e?body.classList.add("body--lock"):body.classList.remove("body--lock"))},header=document.querySelector(".header"),burgerBtn=document.querySelector(".burger-btn");if(header&&burgerBtn){const e=e=>{e?(header.classList.add("header--burger-active"),pageControl(!0)):(pageControl(!1),header.classList.remove("header--burger-active"))},t=e=>{e.target.closest(".header")||e.target.closest(".burger-btn")||burgerBtn.click()},r=r=>{e(r),r?document.addEventListener("click",t):document.removeEventListener("click",t)};r(burgerBtn.classList.contains("burger-btn--active")),burgerBtn.addEventListener("click",(()=>{r(burgerBtn.classList.toggle("burger-btn--active"))}))}const initSubmenu=e=>{e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.parentElement.classList.toggle("active")}))}))};initSubmenu(document.querySelectorAll(".nav__item-has-child > a")),initSubmenu(document.querySelectorAll(".nav__submenu-item-has-child > a"));const cards=document.querySelectorAll(".cards");cards.forEach((e=>{const t=e.querySelectorAll(".cards__item"),r=e.querySelectorAll(".cards__pagination-item");let c=0;function s(){t.forEach((e=>e.classList.remove("--active"))),r.forEach((e=>e.classList.remove("--active"))),t[c].classList.add("--active"),r[c].classList.add("--active"),o()}function o(){if(0===c)e.querySelector(".cards__list").style.transform="translateX(0)";else{const r=t[c].offsetWidth,s=e.offsetWidth,o=t[c].offsetLeft-s/2+r/2;e.querySelector(".cards__list").style.transform=`translateX(-${o}px)`}}s(),o(),r.forEach(((e,t)=>{e.addEventListener("click",(()=>{c=t,s()}))}));let n=0,a=0;e.addEventListener("touchstart",(e=>{n=e.touches[0].clientX})),e.addEventListener("touchmove",(e=>{a=e.touches[0].clientX})),e.addEventListener("touchend",(()=>{n>a+50?c=(c+1)%t.length:n<a-50&&(c=(c-1+t.length)%t.length),s()})),window.addEventListener("resize",o)}));const tabs=document.querySelectorAll(".tabs");tabs.forEach((e=>{const t=e.querySelectorAll(".tabs__btn"),r=e.querySelectorAll(".tabs__content"),c=e.querySelector(".tabs__content-carousel"),s=e.querySelector(".tabs__btns"),o=e.querySelectorAll(".tabs__pagination-item");let n=0;if(t.length>0&&c&&t.length==r.length){const e=e=>{t[n].classList.remove("--active"),r[n].classList.remove("--active"),o[n].classList.remove("--active"),n=e,c.style.transform=`translateX(-${100*n}%)`,c.style.height=`${r[n].offsetHeight}px`,t[n].classList.add("--active"),r[n].classList.add("--active"),o[n].classList.add("--active"),a()},a=()=>{const e=t[n],r=s.offsetWidth,c=e.offsetLeft-r/2+e.offsetWidth/2;s.scrollTo({left:c,behavior:"smooth"})};for(let e=0;e<t.length;e++)t[e].classList.remove("--active"),r[e].classList.remove("--active"),o[e].classList.remove("--active");e(n),t.forEach(((t,r)=>{t.addEventListener("click",(()=>{e(r)}))})),o.forEach(((t,r)=>{t.addEventListener("click",(()=>{e(r)}))}));let l=0,i=0;c.addEventListener("touchstart",(e=>{l=e.touches[0].clientX})),c.addEventListener("touchmove",(e=>{i=e.touches[0].clientX})),c.addEventListener("touchend",(()=>{const r=l-i;r>50&&n<t.length-1?e(n+1):r<-50&&n>0&&e(n-1)}))}}));const forms=document.querySelectorAll(".feedback-form__form");forms.forEach((e=>{const t=e.querySelectorAll(".feedback-form__input.--req input"),r=e.querySelector('input[name="phone"]'),c=e.querySelector(".custom-select"),s=c.querySelector(".custom-select__current"),o=c.querySelectorAll(".custom-select__option"),n=e.querySelector(".feedback-form__mark"),a=n.getAttribute("data-default"),l=e.querySelector('input[name="country-code"]');function i(e){const t=e.closest(".feedback-form__input");e.value.trim()?(t.classList.remove("--error"),u()):(t.classList.add("--error"),n.classList.add("--error"),n.textContent="Ошибка! Проверьте правильность заполнения данных")}function d(){const e=r.closest(".feedback-form__input"),t=r.placeholder,c=r.value;t.split("").every(((e,t)=>"_"===e?/\d/.test(c[t]):e===c[t]))?(e.classList.remove("--error"),u()):(e.classList.add("--error"),n.classList.add("--error"),n.textContent="Ошибка! Проверьте правильность заполнения данных")}function u(){e.querySelectorAll(".feedback-form__input.--error").length>0||(n.classList.remove("--error"),n.textContent=a)}function f(){const e=c.querySelector(".custom-select__option.--current"),t=e.getAttribute("data-mask");r.placeholder=t,r.value="",r.removeEventListener("input",v),r.addEventListener("input",v),l.value=e.textContent}function v(e){let t=e.target.value.replace(/\D/g,"");let c=r.placeholder;e.target.selectionStart;for(let e=0;e<t.length;e++)c=c.replace("_",t[e]);e.target.value=c;let s=c.indexOf("_");-1===s&&(s=c.length),e.target.setSelectionRange(s,s)}t.forEach((e=>{e.addEventListener("blur",(()=>i(e))),e.addEventListener("input",(()=>i(e)))})),r.addEventListener("blur",d),r.addEventListener("input",d),e.addEventListener("submit",(function(e){let c=!0;t.forEach((e=>{i(e),e.value.trim()||(c=!1)})),d(),r.closest(".feedback-form__input").classList.contains("--error")&&(c=!1),c||e.preventDefault()})),c.addEventListener("click",(function(){c.classList.toggle("--active")})),o.forEach((e=>{e.addEventListener("click",(function(){s.textContent=this.textContent,o.forEach((e=>e.classList.remove("--current"))),this.classList.add("--current"),f()}))})),document.addEventListener("click",(function(e){c.contains(e.target)||c.classList.remove("--active")})),f();e.querySelectorAll(".feedback-form__input").forEach((e=>{e.addEventListener("click",(function(){const t=e.querySelector("input");t&&t.focus()}))}))}));const elements=document.querySelectorAll("[data-typing]");elements.forEach((e=>{const t=e.getAttribute("data-typing");e.style.height=`${e.offsetHeight}px`;let r=0;e.innerHTML="",function c(){r<t.length&&(e.innerHTML+=t.charAt(r),r++,setTimeout(c,60))}()})),document.querySelectorAll("[data-glowing]").forEach((e=>{const t=parseInt(e.getAttribute("data-glowing"),10),r=Array.from(e.querySelectorAll("*")).filter((e=>Array.from(e.classList).some((e=>e.endsWith("__item")))));let c=0;if(r.length>0){const e=()=>{r.forEach((e=>e.classList.remove("--glowing"))),r[c].classList.add("--glowing"),c=(c+1)%r.length};e(),setInterval(e,t)}}));const popupInit=(e,t)=>{if(e){document.querySelectorAll(t).forEach((t=>{t.addEventListener("click",(()=>{e.classList.add("popup--active")}))})),e.addEventListener("click",(t=>{t.target.closest(".popup__content")&&!t.target.closest(".popup__close")||e.classList.remove("popup--active")}))}},feedbackPopup=document.querySelector("#feedback-popup");popupInit(feedbackPopup,"[data-popup-feedback]");