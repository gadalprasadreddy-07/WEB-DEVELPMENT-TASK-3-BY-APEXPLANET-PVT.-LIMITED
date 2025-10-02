const quizData = [
       { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
      { question: "Which language runs in a web browser?", options: ["Python", "Java", "JavaScript"], answer: "JavaScript" },
      { question: "Which HTML tag is used for the largest heading?", options: ["<h1>", "<h6>", "<header>"], answer: "<h1>" },
      { question: "Which property is used to change text color in CSS?", options: ["color", "font-color", "text-style"], answer: "color" },
      { question: "Inside which HTML element do we put JavaScript?", options: ["<script>", "<js>", "<javascript>"], answer: "<script>" },
      { question: "Which CSS property controls the size of text?", options: ["font-size", "text-style", "font-weight"], answer: "font-size" },
      { question: "Which operator is used to assign a value to a variable in JavaScript?", options: ["=", "==", "==="], answer: "=" },
      { question: "How do you write 'Hello World' in an alert box?", options: ["alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')"], answer: "alert('Hello World')" },
      { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font"], answer: "style" },
      { question: "Which JavaScript keyword is used to declare a variable?", options: ["var", "let", "Both var and let"], answer: "Both var and let" }
    ];
    let currentQuestion = 0;

    function loadQuestion() {
      const q = quizData[currentQuestion];
      document.getElementById("quiz-question").innerText = q.question;
      const optionsContainer = document.getElementById("quiz-options");
      optionsContainer.innerHTML = "";
      q.options.forEach(opt => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = opt;
        div.onclick = () => {
          if (opt === q.answer) {
            div.style.background = "#48bb78"; // green for correct
          } else {
            div.style.background = "#e53e3e"; // red for wrong
          }
        };
        optionsContainer.appendChild(div);
      });
    }

    function nextQuestion() {
      currentQuestion = (currentQuestion + 1) % quizData.length;
      loadQuestion();
    }

    loadQuestion();

    let currentImage = 1;
    function showImage() {
      document.getElementById("carousel-image").src = `https://picsum.photos/500/300?random=${currentImage}`;
    }
    function nextImage() {
      currentImage++;
      showImage();
    }
    function prevImage() {
      currentImage = currentImage > 1 ? currentImage - 1 : 5;
      showImage();
    }

   
    async function fetchJoke() {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    }
