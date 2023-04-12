import React from "react"


export const Menus = ({data}) => {
  return (
          <li>
            <a href="#">{data?.text}</a>
          </li>
  );
};
