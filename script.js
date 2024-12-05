function calculateSavings() {
  const schools = parseFloat(document.getElementById('schools').value);
  const priorSpend = parseFloat(document.getElementById('prior-spend').value);

  const totalSavings = (schools * 0.1) + (schools * 15 * 195);

  document.getElementById('total-savings').textContent = '£' + totalSavings.toFixed(2);
}