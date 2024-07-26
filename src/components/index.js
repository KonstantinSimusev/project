import '../pages/index.css';
import { questions } from './questions';
import { createQuestion } from './card';

const questionsList = document.querySelector('.questions__list');
const randomQuestions = questions.sort(() => Math.random() - 0.5);

randomQuestions.forEach(question => {
  const card = createQuestion(question, questions);
  questionsList.append(card);
});
