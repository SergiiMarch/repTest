// ==========================================
// const STORAGE_KEY = 'feedback-form-state';
// const inputForm = {
//   email: '',
//   message: '',
// };

// formEl.addEventListener('submit', handleSubmit);

// function formValue(evt) {
//   evt.target.message.value = inputForm.message;
//   evt.target.email.value = inputForm.email;
// }

// function handleSubmit(evt) {
//   evt.preventDefault();
//   inputForm[evt.target.name] = evt.target.value;
// }
// console.log(inputForm);
// =========================
// function findShort(s) {
//   let m = s.split(' ');
//   let str = m[0];
//   for (let i = 1; i < m.length; i += 1) {
//     if (m[i].length < str.length) {
//       str = m[i];
//     }

//   }
//   return str.length;
// }
// const shortes = findShort('hellow my life javaScpt');
// console.log(shortes);

// ======================

// const containerEl = document.querySelector('.container');

// const heverHandler = e => {
//   const { target: button } = e;
//   button.style.top = `${Math.floor(
//     Math.random() * (window.innerHeight - button.clientHeight)
//   )}px`;
//   button.style.left = `${Math.floor(
//     Math.random() * (window.innerWidth - button.clientWidth)
//   )}px`;
//   console.log(button.clientHeight);
//   console.log(button.clientWidth);
// };

// containerEl.addEventListener('mouseover', heverHandler);

function sumMix(x) {
  const sum = parseInt(...x);
  console.log(sum);
}
console.log(sumMix([9, 3, '7', '3']));
