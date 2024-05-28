document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number');
    const convertBtn = document.getElementById('convert-btn');
    const output = document.getElementById('output');
  
    convertBtn.addEventListener('click', () => {
      const number = parseInt(numberInput.value);
  
      if (isNaN(number) || number <= 0) {
        if (number === -1) {
          output.textContent = 'Please enter a number greater than or equal to 1';
        } else {
          output.textContent = 'Please enter a valid number';
        }
        return;
      }
  
      if (number >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
        return;
      }
  
      output.textContent = convertToRoman(number);
    });
  
    function convertToRoman(num) {
      if (num >= 4000) {
        return 'Please enter a number less than or equal to 3999';
      }
  
      const romanNumeralMap = [
        { numeral: 'M', value: 1000 },
        { numeral: 'CM', value: 900 },
        { numeral: 'D', value: 500 },
        { numeral: 'CD', value: 400 },
        { numeral: 'C', value: 100 },
        { numeral: 'XC', value: 90 },
        { numeral: 'L', value: 50 },
        { numeral: 'XL', value: 40 },
        { numeral: 'X', value: 10 },
        { numeral: 'IX', value: 9 },
        { numeral: 'V', value: 5 },
        { numeral: 'IV', value: 4 },
        { numeral: 'I', value: 1 }
      ];
  
      let romanNumeral = '';
  
      for (let i = 0; i < romanNumeralMap.length; i++) {
        while (num >= romanNumeralMap[i].value) {
          romanNumeral += romanNumeralMap[i].numeral;
          num -= romanNumeralMap[i].value;
        }
      }
  
      return romanNumeral;
    }
  });
  