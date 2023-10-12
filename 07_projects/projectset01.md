# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 01

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


```

## Project 2

```javascipt

const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = 'Please give valid height!!!';
  }else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = 'Please give valid height!!!';
  }else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```