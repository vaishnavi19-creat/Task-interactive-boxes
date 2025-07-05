const unitBoxes = document.querySelectorAll('.unit-box');
const totalPriceEl = document.querySelector('.footer strong');

unitBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Close all other boxes
    unitBoxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.querySelector('.options-container').classList.add('hidden');
        otherBox.querySelector('input[type="radio"]').checked = false;
      }
    });

    // Toggle current box
    const options = box.querySelector('.options-container');
    const radio = box.querySelector('input[type="radio"]');
    const isHidden = options.classList.contains('hidden');

    if (isHidden) {
      options.classList.remove('hidden');
      radio.checked = true;

      // pdate total
      const price = parseFloat(box.getAttribute('data-price'));
      totalPriceEl.textContent = `$${price.toFixed(2)} USD`;
    } else {
      options.classList.add('hidden');
      radio.checked = false;

      // Reset total if unchecking
      totalPriceEl.textContent = `$0.00 USD`;
    }
  });
});
