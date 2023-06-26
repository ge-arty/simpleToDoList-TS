import { ChangeEvent, FormEvent, useState } from "react";

interface InputProps {
  setTask: (task: string) => void;
}

export default function Input(props: InputProps): JSX.Element {
  const { setTask } = props;
  const [inputValue, setInputValue] = useState<string>("");
  console.log(`component render`);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTask(inputValue);
    setInputValue("");
  };

  return (
    <form className="to-do-form" onSubmit={onSubmit}>
      <input value={inputValue} type="text" onChange={onChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}
