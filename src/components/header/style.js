import styled from "styled-components";

export const HeaderWrapper = styled.header`
  overflow: hidden;
  position: relative;
  box-shadow:0 0 10px 2px #ddd;
  padding:15px 0;
   .logo img{
    max-width:150px;
    padding:0px 10px;
    width:100%;
   } 
   .menu{
    list-style:none;
    display:flex;
    justify-content:flex-end;
   }
   .head-inner{
    display:flex;
    justify-content:space-between;
    align-items:center;
   }
   .menu {
    li{
        margin-left:30px;
        a{
            color:#000;
            text-transform:uppercase;
            font-size:16px;
            font-weight:600;
            font-family: 'Oswald', sans-serif;
            &:hover{
                color:#b6142c;
            }
        }
    }
   }
   
  }
`;