/* Reusable retrieval-practice quiz widget for course lessons.
   Markup contract:
     <div class="quiz" data-quiz>
       <p class="q">Question text</p>
       <button data-correct>Right answer</button>
       <button>Distractor</button>
       ...
       <p class="explain" hidden>Shown after any answer.</p>
     </div>
   Answers are revealed only after a click — this is retrieval practice, not multiple-guess.
   Keep answer button text equal length where possible (no formatting tells). */

document.querySelectorAll('[data-quiz]').forEach(function (quiz) {
  var buttons = quiz.querySelectorAll('button');
  var explain = quiz.querySelector('.explain');
  var answered = false;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (answered) return;
      answered = true;
      buttons.forEach(function (b) {
        b.disabled = true;
        if (b.hasAttribute('data-correct')) b.classList.add('correct');
      });
      if (!btn.hasAttribute('data-correct')) btn.classList.add('wrong');
      if (explain) explain.hidden = false;
    });
  });
});
