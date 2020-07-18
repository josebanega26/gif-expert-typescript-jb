import React, { Fragment, useState } from "react";
import Categories from "./Categories";
import AddCategory from './AddCategory'

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Star wars", "Lord of rings"]);

  
  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <hr/>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />
      <Categories data={categories} />
    </Fragment>
  );
};

export default GiftExpertApp;
