// JavaScript code for quiz submission
const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const question1Answer = document.getElementById('question1').value;
  const question2Answer = document.getElementById('question2').value;

  // Validate and process the answers
  if (question1Answer === 'Paris' && question2Answer.toLowerCase() === 'hola') {
    alert('Congratulations! Your answers are correct.');
  } else {
    alert('Sorry, one or more answers are incorrect. Please try again.');
  }
});
