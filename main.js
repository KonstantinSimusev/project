(()=>{"use strict";var t=[{title:"Понятие нормирования труда",answers:[{title:"Определение затрат времени, требующихся для выполнения той или иной работы в различных организационно – технических условиях",bool:!0},{title:"Определение количества персонала для выполнения той или иной работы",bool:!1},{title:"Определение количества оборудования, которое может обслуживать работник",bool:!1}]},{title:"Какие бывают нормы труда?",answers:[{title:"Нормы выработки, времени, обслуживания, численности, управляемости",bool:!0},{title:"Нормы выработки, времени",bool:!1},{title:"Нормы времени, численности",bool:!1}]},{title:"Показатели премирования подразделяются на",answers:[{title:"Количественные",bool:!0},{title:"Качественные",bool:!0},{title:"Экономические",bool:!0},{title:"Цеховые",bool:!1},{title:"Межцеховые",bool:!1},{title:"Основные",bool:!1}]}],e=document.querySelector("#question-template").content,o=document.querySelector("#input-radio-template").content,n=document.querySelector("#input-checkbox-template").content,r=[],l=document.querySelector(".questions__list"),i=document.querySelector(".footer__button"),s=document.querySelector(".button__test_open"),u=document.querySelector(".overlay");t.sort((function(){return Math.random()-.5})).forEach((function(i){var s=function(t,l){var i=e.querySelector(".question__item").cloneNode(!0),s=i.querySelector(".question__title"),u=i.querySelector(".qustion__text"),c=i.querySelector(".answers__list"),a=i.querySelector(".form__type_answer"),d=i.querySelector(".question__result"),_=i.querySelector(".button"),b=t.answers.sort((function(){return Math.random()-.5})),f=b.map((function(t){return t.bool})).filter((function(t){return!0===t})).join();s.textContent="Вопрос ".concat(l.indexOf(t)+1," из ").concat(l.length),u.textContent=t.title,b.forEach((function(e){var l=function(t,e,l){var i="",s=e.filter((function(t){return!0===t.bool})),u=(i=s.length>1?n.querySelector(".answer__item").cloneNode(!0):o.querySelector(".answer__item").cloneNode(!0)).querySelector(".input"),c=i.querySelector(".input__text");return u.value=t.title,c.textContent=t.title,i.addEventListener("change",(function(){s.length>1?r.push(t.bool):(r=[]).push(t.bool),l.disabled=!1,l.classList.remove("form__button_disabled")})),i}(e,t.answers,_);c.append(l)}));var q=c.querySelectorAll(".input");return q.forEach((function(t){t.checked||(_.classList.add("form__button_disabled"),_.disabled=!0)})),a.addEventListener("submit",(function(t){t.preventDefault(),r.join()===f?(d.classList.add("question__result_right"),d.classList.add("result_is-visible"),d.textContent="Правильный ответ"):(d.classList.add("question__result_error"),d.classList.add("result_is-visible"),d.textContent="Неправильный ответ"),q.forEach((function(t){t.checked=!1})),r=[],_.classList.add("form__button_disabled"),_.disabled=!0,setTimeout((function(){d.textContent="",d.classList.remove("question__result_error"),d.classList.remove("question__result_right"),d.classList.remove("result_is-visible")}),3e3)})),i}(i,t);l.append(s)})),i.addEventListener("click",(function(){i.textContent="Платный контент..."})),s.addEventListener("click",(function(){u.classList.add("popup_is-animated")}))})();