import React from "react";

interface CategoriesProps {
  data: string[];
}
const Categories = ({ data }: CategoriesProps) => {
  const getItem = (item: string,id:string) => (
    <div id={id}>
      <h2>{item}</h2>
    </div>
  );
  return <div>{ data.map((item,index)=>{
    return getItem(item,`${index}`)
  }) }</div>
};

export default Categories;
