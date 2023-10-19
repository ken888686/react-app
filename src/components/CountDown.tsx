import useCounter, { Type } from "../hooks/useCounter";

function CountDown() {
  const { counter } = useCounter(100, Type.plus);
  return <>Count: {counter}</>;
}

export default CountDown;
