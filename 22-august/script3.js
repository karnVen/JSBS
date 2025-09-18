
const button = document.querySelector('bt');

button.addEventListener('click', () => {
  const i1input = document.getElementById('i1');
  const invalue = i1input.value;

  const i2input = document.getElementById('i2');
  const i2nvalue = i1input.value;

  const num1 = Number(invalue);
  const num2 = Number(i2nvalue);

    const sum = num1 + num2;

  console.log(sum);

  getElementById('b13')=sum;

});

