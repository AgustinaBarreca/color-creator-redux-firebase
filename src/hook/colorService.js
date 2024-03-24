import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const propsOfInput = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  const resetValue = () => setValue(initialValue);

  return [propsOfInput, resetValue];
};
