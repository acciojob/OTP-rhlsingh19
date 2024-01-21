//your JS code here. If required.
function focusNext(input) {
      if (input.value.length === 1) {
        const nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    function handleBackspace(input, event) {
      if (event.key === 'Backspace' && input.value.length === 0) {
        const prevInput = input.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }