// Adiciona o iframe ao popup
document.addEventListener('DOMContentLoaded', () => {
  const chatbotDiv = document.querySelector("#chat-bot");
  const iframe = document.createElement('iframe');

  iframe.src = `https://${ENV.CHATBOT_DOMAIN}/chatbot-iframe/${ENV.BOT_ID}`;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  chatbotDiv.appendChild(iframe);
});