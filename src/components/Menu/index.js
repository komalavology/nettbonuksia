import React from "react"


export const Menus = ({data}) => {
  return (
          <li>
            <a href={data?.link?data.link:"#"}>{data?.text}</a>
          </li>
  );
};
