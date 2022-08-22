const currentnumber = 0;
const gardian = (i) => ` linear-gradient(90deg,#FE8D7B ${i}%, white 0%)`;
let i = -10;
let interval = setInterval(() => {
  console.log(i)
  let border = document.getElementsByClassName("service-border")[0];
  i++;
  document.currentnumber = i;
  border.style.backgroundImage = gardian(i)
  if (i == 100) {
    clearInterval(interval)
  }
}, 20)