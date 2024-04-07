import React, { useState } from "react";
import styles from "./ButtonBoard.module.css";

import { useContext } from "react";
import { FeedbackContext } from "../../../../store/feedback-context";

export default function ButtonBoard() {
  const [btnActive, setBtnActive] = useState('All')
  const capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const { productData,filteredProductsByCategory } = useContext(FeedbackContext);
  const categories = [
    "All",
    "UI",
    "UX",
    ...Array.from(new Set(productData.map((product) => product.category))),
  ];
  function handleCategory(category){
    setBtnActive(category)
    filteredProductsByCategory(category)
  }

  return (
    <div className={`${styles.buttonBoard} `}>
      {categories.map((category, index) => {
        console.log(btnActive == category);
        return (
          <div key={index}>
            <button className={`${styles.button} ${btnActive == category ? '!text-numsA !bg-smBtnBgA' : '!text-smBtnTxt hover:bg-smBtnBgH'}`} onClick={()=>handleCategory(category)}>{capitalizeFirstLetter(category)}</button>
          </div>
        );
      })}
    </div>
  );
}
