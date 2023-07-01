import { ChangeEvent, FormEvent, useState } from "react";
import { BtnMove, FormContainer, InputElement } from "../styles/styles";

interface InputProps {
  setTask: (task: string) => void;
}

export default function Input(props: InputProps): JSX.Element {
  const { setTask } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTask(inputValue);
    setInputValue("");
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <InputElement value={inputValue} type="text" onChange={onChange} />
      <BtnMove type="submit">Add Task</BtnMove>
    </FormContainer>
  );
}
