//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");



fetch("http://localhost:3000/quizes")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log("quiz", data[0].quizContent, data[0]._id)
    displayQuiz(data[0].quizContent, data[0]._id)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


let userScore = 0;

function displayQuiz(questions, quizId) {
  randomUserArray = [
    {
      _id: "650d7bd98674bf1d4940c485",
      name: "Sneha Lahiri",
      phone: "111111111",
      email: "snehalahiri09@gmail.com"

    },
    {
      _id: "650d7bf08674bf1d4940c487",
      name: "Ayan",
      phone: "111111111",
      email: "ayan@gmail.com"

    },
    {
      _id: "650d7c008674bf1d4940c489",
      name: "Prashareet",
      phone: "111111111",
      email: "prashareet@gmail.com"
    },
    {
      _id: "650d7c118674bf1d4940c48b",
      name: "ishita",
      phone: "111111111",
      email: "ishita@gmail.com"
    },
    {
      _id: "650d97ca084a6ccd322c1bf9",
      name: "Dip Ranjan Dutta",
      phone: "111111111",
      email: "dip@gmail.com"
    }
  ]


  let randomIndex = Math.floor(Math.random() * (4 - 1 + 1)) + 1
  let user = randomUserArray[randomIndex - 1]
  console.log(user)

  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
  };

  // if exitQuiz button clicked
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
  };

  // if continueQuiz button clicked
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0, questions);
    queCounter(1, questions);
    startTimer(15);
    startTimerLine(0);
  };

  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let counter;
  let counterLine;
  let widthValue = 0;

  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");

  // if restartQuiz button clicked
  restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count, questions);
    queCounter(que_numb, questions);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
  };

  // if quitQuiz button clicked
  quit_quiz.onclick = () => {
    window.location.reload();
  };

  const next_btn = document.querySelector("footer .next_btn");

  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      //if question count is less than total question length
      que_count++;
      que_numb++;
      showQuetions(que_count, questions);
      queCounter(que_numb, questions);
      clearInterval(counter);
      clearInterval(counterLine);
      startTimer(timeValue);
      startTimerLine(widthValue);
      timeText.textContent = "Time Left";
      next_btn.classList.remove("show");
    } else {
      clearInterval(counter);
      clearInterval(counterLine);
      showResult(questions, quizId, user);
    }
  };

}



// getting questions and options from array
function showQuetions(index, questions) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].level +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {

    option[i].addEventListener("click", function (event) {
      optionSelected(this, questions, index)
      event.preventDefault();
    });
  }

  function optionSelected(answer, questions, que_count) {

    const next_btn = document.querySelector("footer .next_btn");
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore += 1;
      answer.classList.add("correct");
      answer.insertAdjacentHTML("beforeend", tickIconTag);
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect");
      answer.insertAdjacentHTML("beforeend", crossIconTag);
      console.log("Wrong Answer");

      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option


function showResult(questions, quizId, user) {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>Congrats! 🎉 You scored <p>" +
      userScore +
      "</p> / <p>" +
      questions.length +
      " points" +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>Nice! 😎 You scored <p>" +
      userScore +
      "</p> / <p>" +
      questions.length +
      " points" +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>Sorry! 😐 You scored <p>" +
      userScore +
      "</p> / <p>" +
      questions.length +
      " points" +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
  updateResult(quizId, user, userScore)
}

async function updateResult(quizId, user, userScore) {
  console.log("We triggered put call")
  let userData = {
    quizProgress: 
      {
        id: quizId,
        score: userScore
      }
    
  }
  const settings = {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }
  try {
    const fetchResponse = await fetch(`http://localhost:3000/users/${user._id}`, settings)
    const data = await fetchResponse
    console.log(data)
    return data
  }
  catch (e) {
    console.log(e)
    return e
  }


}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter);
      timeText.textContent = "Time Off";
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].answer;
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index, questions) {

  const bottom_ques_counter = document.querySelector("footer .total_que");
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag;
}
