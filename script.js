const chatbotIcon = document.querySelector(".chatbot-icon");
const chatbotWindow = document.querySelector(".chatbot-window");
const closeBtn = document.querySelector(".chatbot-close-btn");

chatbotIcon.addEventListener("click", () => {
  chatbotWindow.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
});
