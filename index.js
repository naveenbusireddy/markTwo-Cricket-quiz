var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var questions = [
    {
        question: "When was the ashes first played ?\n A: 1872\n B: 1877\n C: 1882\n D: 1887\n Option: ",
        answer: "C"
    },
    {
        question: "Who won the first ever cricket world cup in 1975 ?\n A:A ustralia\n B: England\n C: India\n D: WestIndies\n Option: ",
        answer: "D"
    },
    {
        question: "How long is the wicket on a cricket pitch ?\n A:18 Yards\n B:20 Yards\n C: 22 Yards\n D: 24 Yards\n Option: ",
        answer: "C"
    },
    {
        question: "Who is the only Batsman to record 400 runs in an international test match ?\n A: Steve Smith\n B: WG Grace\n C: Don Bradman\n D: Brain Lara\n Option: ",
        answer: "D"
    },
    {
        question: "Who is the First batsman to cross 10,000 runs in tests ?\n A: Sunil Gavaskar\n B: Sachin Tendulkar\n C: Allan Board\n D: Brain Lara\n Option: ",
        answer: "A"
    }
];

var highScore = [
    {
        name: "Naveen",
        score: 5
    },
    {
        name: "Sri",
        score: 4
    }
];

function colorLine() {
    console.log(chalk.cyan("-----------------------------"));
}

function rules() {
    console.log(chalk.cyanBright("Quiz rules!"));
    console.log(chalk.cyanBright("1. Select  the option from: A/B/C/D "));
    console.log(chalk.cyanBright("2. Press Enter"));
    console.log(chalk.cyanBright("3. If your final score is beats the existing high scrorer score, then send me screenshot i will update"));
    colorLine();
}

function welcomeMessage() 
{
    var userName = readlineSync.question(chalk.yellow("May I know your Name: "));
    console.log(chalk.magentaBright("Welcome "+userName));
}

function play()
{
    if(readlineSync.keyInYN(chalk.yellow("Are you intrested to play Cricket quiz!!")))
    {
        console.log(chalk.blue("your quiz will start here!"));
        quizExecution();
    }
    else {
        console.log(chalk.greenBright("Bye Bye, will see you later"));
        colorLine();
    }
}

function quiz(question, answer)
{
    var userAnswer = readlineSync.question(chalk.yellowBright(question));
    if(userAnswer.toLowerCase() == answer.toLowerCase())
    {
        console.log(chalk.blueBright("Right Answer"));
        score = score+1;
    }
    else {
        console.log(chalk.redBright("Wrong Answer"));
    }
    console.log(chalk.blueBright("Your current score: "+score));
    colorLine();
}

function quizExecution()
{
    for(var i=0; i<questions.length; i++)
    {
        quiz(questions[i].question, questions[i].answer)
    }
}

function showScore ()
{
    console.log(chalk.green("Check out the high scores, if your there send me screenshot and i will update "));
    console.log(chalk.yellowBright("your score : "+score));

    for(var i=0; i<highScore.length; i++)
    {
        console.log(chalk.yellowBright(highScore[i].name, ": "+highScore[i].score));
    }  
}

colorLine();
welcomeMessage();
rules();
play();
showScore();