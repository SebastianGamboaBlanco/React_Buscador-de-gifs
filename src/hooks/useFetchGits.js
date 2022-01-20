import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGits = (categoria) => {
   const [state, setState] = useState({
      data: [],
      leading: true,
   });

   useEffect(() => {
      getGifs(categoria).then((img) => {
         setState({
            data: img,
            leading: false,
         });
      });
   }, [categoria]);

   return state;
};
