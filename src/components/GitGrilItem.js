import React from "react";

export const GitGrilItem = ({ id, titulo, url }) => {
   return (
      <div className="card">
         <img src={url} alt={titulo}></img>
      </div>
   );
};
export default GitGrilItem;
