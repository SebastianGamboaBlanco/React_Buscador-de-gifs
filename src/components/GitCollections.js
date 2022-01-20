import React from "react";
import { useFetchGits } from "../hooks/useFetchGits";
import GitGrilItem from "./GitGrilItem";

export const GitCollections = ({ categoria }) => {
   const { data, leading } = useFetchGits(categoria);
   return (
      <>
         {leading ? (
            <p>Cargando...</p>
         ) : data.length > 0 ? (
            <a name={categoria}>
               <hr />
            </a>
         ) : (
            alert("No se encontro su busqueda ")
         )}
         {data.length > 0 && (
            <div className="contenedorCards">
               {data.map((img) => (
                  <GitGrilItem key={img.id} {...img} />
               ))}
            </div>
         )}
      </>
   );
};
