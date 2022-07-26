export default function inputRange(rangeEl, resultEl) {
  const formRange = document.querySelector(rangeEl);
  const formRangeResult = document.querySelector(resultEl);

  function getRangeValue() {
    let value = formRange.value;
    formRangeResult.textContent = value;
  }

  getRangeValue();

  formRange.addEventListener('input', () => {
    getRangeValue();
  });
}
