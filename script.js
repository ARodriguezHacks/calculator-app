let output = document.querySelector('.output');
//console.log(output, typeof output);

document.querySelector('.buttons-container').addEventListener('click', function(event) {
  const newOutput = event.target.innerText;
  console.log(typeof newOutput);
  if (output.innerText === "0") {
    output.innerText = newOutput;
  }
  else if (newOutput === "C") {
    output.innerText = "0";
  }
  else {
    output.innerText += newOutput;
  }
});