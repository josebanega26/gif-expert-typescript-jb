import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddCategoryProps {
  setCategories: Function;
}
const AddCategory = ({ setCategories }: AddCategoryProps) => {
  const [input, setInput] = useState("hey");
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length < 1) {
      return;
    }
    setCategories(oldCateogries => [...oldCateogries, input]);
    setInput("");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        onChange={changeInput}
        value={input}
        name=""
        id="search"
      />
    </form>
  );
};

export default AddCategory;
