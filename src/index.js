module.exports = function toReadable (number) {

        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const thousands = ['', 'thousand', 'million', 'billion'];
      
        let words = '';
      
        if (number === 0) {
          return 'zero';
        }
      
        let i = 0;
        while (Math.floor(number) > 0) {
          if (number % 1000 !== 0) {
            words = helper(Math.floor(number % 1000)) + (i > 0 ? ' ' + thousands[i] : '') + (words !== '' ? ' ' + words : '');
          }
          number /= 1000;
          i++;
        }
      
        return words.trim();
      
        function helper(number) {
          let words = '';
      
          if (number % 100 > 0) {
            words += ones[Math.floor(number % 10)];
            number = Math.floor(number / 10);
          }
      
          if (number % 10 > 1) {
            words = tens[number % 10] + (words !== '' ? ' ' + words : '');
            number = Math.floor(number / 10);
          }
      
          if (number > 1) {
            words = teens[number - 1] + (words !== '' ? ' ' + words : '');
            number = 0;
          }
      
          if (number > 0) {
            words = ones[number] + ' hundred' + (words !== '' ? ' and ' + words : '');
          }
      
          return words.trim();
        }
      }
      

