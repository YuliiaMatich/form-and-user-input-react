import { useState } from 'react';

const useInput1 = (validateValue) => {

const [valueChange, setValueChange] = useState("");
const [wasTouched, setWasTouched] = useState(false);

const isValid = validateValue(valueChange);
const showError = !isValid && wasTouched;

const valueChangeHandler = (event) => {
  setValueChange(event.target.value);
}

const blurChangeHandler = () => {
  setWasTouched(true);
}

const reset = () => {
  setValueChange("");
  setWasTouched("");
}

return {
value: valueChange,
valueChangeHandler,
blurChangeHandler,
isValid,
showError,
reset
}
};

export default useInput1;