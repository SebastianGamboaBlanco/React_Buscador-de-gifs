import React, { useState } from "react";
import PropsTypes from "prop-types";
export const AddCategory = ({ setCategory }) => {
   const [inputValue, setinputValue] = useState("");
   const handleInputValue = (valor) => {
      setinputValue(valor.target.value);
   };
   const handleSubmi = (e) => {
      e.preventDefault();
      if (inputValue.trim().length > 0) {
         setCategory((cat) => [inputValue, ...cat]);
         setinputValue("");
      }
   };
   return (
      <form onSubmit={handleSubmi}>
         <input type="text" placeholder="Buscar" value={inputValue} onChange={handleInputValue} />
      </form>
   );
};

AddCategory.propTypes = {
   setCategory: PropsTypes.func.isRequired,
};
