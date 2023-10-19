import { useEffect, useState } from "react";

export enum Type {
  plus,
  minus,
}

function useCounter(input: number, type: Type) {
  const [counter, setCount] = useState<number>(input);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (type) {
        case Type.plus:
          setCount((prev) => prev + 1);
          break;
        case Type.minus:
          setCount((prev) => prev - 1);
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [input, type]);

  return { counter };
}

export default useCounter;
