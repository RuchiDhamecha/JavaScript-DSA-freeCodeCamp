document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');
  
    checkBtn.addEventListener('click', () => {
      const inputText = textInput.value.trim();
  
      if (inputText === '') {
        alert('Please input a value');
        return;
      }
  
      const formattedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reversedText = formattedText.split('').reverse().join('');
  
      if (formattedText === reversedText) {
        result.textContent = `${inputText} is a palindrome`;
      } else {
        result.textContent = `${inputText} is not a palindrome`;
      }
    });
  });
  