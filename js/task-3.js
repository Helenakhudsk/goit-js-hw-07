const textInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
textInput.addEventListener('input', (event) => {
    const valueInput = event.currentTarget.value.trim();
    nameOutput.textContent = valueInput;
   if(valueInput.length === 0 || valueInput === "") {
    return nameOutput.textContent = "Anonymous"
}
})

