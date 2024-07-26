const questionTemplate = document.querySelector('#question-template').content;
const inputRadioTemplate = document.querySelector('#input-radio-template').content;
const inputCheckboxTemplate = document.querySelector('#input-checkbox-template').content;

let userAnswers = [];

const createInput = (answer, answers, element) => {
  let input = '';
  const total = answers.filter((answer) => answer.bool === true);

  total.length > 1
    ? (input = inputCheckboxTemplate.querySelector('.answer__item').cloneNode(true))
    : (input = inputRadioTemplate.querySelector('.answer__item').cloneNode(true));

  const field = input.querySelector('.input');
  const text = input.querySelector('.input__text');

  field.value = answer.title;
  text.textContent = answer.title;

  input.addEventListener('change', () => {
    if (total.length > 1) {
      userAnswers.push(answer.bool);
    } else {
      userAnswers = [];
      userAnswers.push(answer.bool);
    }

    element.disabled = false;
    element.classList.remove('form__button_disabled');
  });

  return input;
};

export const createQuestion = (question, questions) => {
  const card = questionTemplate.querySelector('.question__item').cloneNode(true);
  const questionTitle = card.querySelector('.question__title');
  const questionText = card.querySelector('.qustion__text');
  const answersList = card.querySelector('.answers__list');
  const inputForm = card.querySelector('.form__type_answer');
  const result = card.querySelector('.question__result');
  const button = card.querySelector('.button');

  const randomAnswers = question.answers.sort(() => Math.random() - 0.5);
  const joinRandomAnswers = randomAnswers.map(item => item.bool).filter(item => item === true).join();

  questionTitle.textContent = `Вопрос ${questions.indexOf(question) + 1} из ${questions.length}`;
  questionText.textContent = question.title;

  randomAnswers.forEach((answer) => {
    const input = createInput(answer, question.answers, button);
    answersList.append(input);
  });

  const inputs = answersList.querySelectorAll('.input');

  inputs.forEach(input => {
    if (!input.checked) {
      button.classList.add('form__button_disabled');
      button.disabled = true;
    }
  });

  inputForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (userAnswers.join() === joinRandomAnswers) {
      result.classList.add('question__result_right');
      result.classList.add('result_is-visible');
      result.textContent = 'Правильный ответ'
    } else {
      result.classList.add('question__result_error');
      result.classList.add('result_is-visible');
      result.textContent = 'Неправильный ответ';
    }

    inputs.forEach(input => {
      input.checked = false;
    });

    userAnswers = [];
    button.classList.add('form__button_disabled');
    button.disabled = true;

    setTimeout(() => {
      result.textContent = '';
      result.classList.remove('question__result_error');
      result.classList.remove('question__result_right');
      result.classList.remove('result_is-visible');
    }, 3000);
  });

  return card;
};
