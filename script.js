
function getPin() {

    var randomPin = (Math.random() * 10000 + '').split('.')[0];
    if (randomPin.length === 4) {
        return randomPin;
    } else {
        return getPin();
    }
}

// display generated pin

function pinGenerated() {
    const pinInput = document.getElementById('pin-number');
    pinInput.value = getPin();
}

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit == 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        if(digit == 'B') {
            
            const typedInput = document.getElementById('typed-pin').value;
            const newValue = parseInt(typedInput/10);
            document.getElementById('typed-pin').value = newValue;
            if(newValue == 0){
                document.getElementById('typed-pin').value = '';
            }
        }

    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin-number').value;
    const typedPin = document.getElementById('typed-pin').value;

    if (pin == typedPin) {
        displayMatchResult('block','none');
    } else {
        displayMatchResult('none','block');
    }
}

function displayMatchResult(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}