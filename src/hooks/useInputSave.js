import { useState, useEffect } from "react";

const useInputSave = (key, initialValue) => {
  let [value, setValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
export default useInputSave;
