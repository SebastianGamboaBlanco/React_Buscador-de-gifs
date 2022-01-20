import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitCollections } from "./components/GitCollections";
import { Historial } from "./components/Historial";
const GitExpertApp = () => {
   //const category = ["One push", "Dragon Ball", "Naruto"];
   const [category, setCategory] = useState([]);
   /* const handleAdd = () => {
      Agregue de primero setCategory(["one pice", ...category]);
      //setCategory([...category, "one pice"]);
      //setCategory(category.concat("one pices"));
   };*/
   return (
      <>
         <h1 className="titulo"> Buscador De Gifs</h1>
         <div className="buscador">
            <AddCategory setCategory={setCategory} />
            <Historial categoria={category} />
         </div>

         <div>
            {category.map((category) => (
               <GitCollections key={category} categoria={category} />
            ))}
         </div>
      </>
   );
};

export default GitExpertApp;
