document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const prizeMessage = document.getElementById("prize-message");
  
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        const prize = box.getAttribute("data-prize");
        prizeMessage.textContent = `Congratulations! You won a ${prize}! 🎉`;
      });
    });
  
    document.getElementById("submit-answer").addEventListener("click", () => {
      const answer = document.getElementById("answer").value.trim();
      if (answer.toLowerCase() === "yes") {
        document.getElementById("gift-boxes").style.display = "block";
      } else {
        alert("Try again!");
      }
    });
  });
  