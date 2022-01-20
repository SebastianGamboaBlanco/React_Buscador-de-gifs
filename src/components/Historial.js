import React from "react";
export const Historial = ({ categoria }) => {
   return (
      <ul className="historial">
         {categoria.map((cat) => {
            return (
               <li key={cat}>
                  <a className="historial__link" href={`#${cat}`}>
                     {cat}
                  </a>
                  <div>
                     <p className="closed">X</p>
                  </div>
               </li>
            );
         })}
      </ul>
   );
};
