import React from "react"
export const Menus = ({data, activeMenu}) => {
  const currentlink = data?.link;
  const link = currentlink.split("/");
  let lnk = '';
  if(link[2]){
    lnk = link[2]
  }else{
    lnk = '';
  }
  return (
          <li className={activeMenu === lnk ? "active" : ""}>
            <a href={data?.link?data.link:"#"}>{data?.text}</a>
          </li>
  );
};
