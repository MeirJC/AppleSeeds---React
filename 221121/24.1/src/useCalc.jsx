// import React from "react";
import { useState } from "react";

export const useCalc = (initial) => {
  const [number, setNumber] = useState(initial);
  const addOne = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };
  const removeOne = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };
  const double = () => {
    setNumber((prev) => {
      return prev * 2;
    });
  };
  const divide = () => {
    setNumber((prev) => {
      return prev / 2;
    });
  };
  const invertSign = () => {
    setNumber((prev) => {
      return -prev;
    });
  };

  return { number, addOne, removeOne, double, divide, invertSign };
};
