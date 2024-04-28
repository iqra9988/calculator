let result = document.getElementById('result');

function clearResult() {
  result.value = '';
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function appendValue(value) {
  result.value += value;
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}