import React, { Fragment } from "react";
import Categories from "./Categories";

const GiftExpertApp = () => {
  const categories: string[] = ["Star wars", "Lord of rings"];
  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <hr />
      <Categories data={categories} />
    </Fragment>
  );
};

export default GiftExpertApp;
