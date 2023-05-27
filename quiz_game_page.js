localStorage.getItem("user1_name");
document.getElementById("player1_name").innerHTML = localStorage.getItem("user1_name") + " :";

localStorage.getItem("user2_name");
document.getElementById("player2_name").innerHTML = localStorage.getItem("user2_name") + " :";

localStorage.getItem("user1_name");
document.getElementById("player1_question").innerHTML = localStorage.getItem("user1_name");

localStorage.getItem("user2_name");
document.getElementById("player2_answer").innerHTML = localStorage.getItem("user2_name");

function send()
{
    number_1 = document.getElementById("question_1_input").value
    number_2 = document.getElementById("question_2_input").value
    
    localStorage.setItem("number 1", number_1);
    localStorage.setItem("number 2", number_2);
}