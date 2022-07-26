export default function form(formEl) {
  const calculateForm = document.querySelector(formEl);

  calculateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.target));
  });
}
