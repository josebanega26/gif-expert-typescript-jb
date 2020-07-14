import React, { Fragment, useState } from "react";
import Categories from "./Categories";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Star wars", "Lord of rings"]);

  const handleAdd = () => {
    const category: string = "HxH"
    console.log('added')
    setCategories(oldCategories => [...oldCategories, category]);
  };
  return (
    <Fragment>
      <button onClick={handleAdd}>add</button>
      <h2>Gif Expert App</h2>
      <hr />
      <Categories data={categories} />
    </Fragment>
  );
};

export default GiftExpertApp;
