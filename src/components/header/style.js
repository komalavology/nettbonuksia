import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  box-shadow: 0 0 10px 2px #ddd;
  padding: 15px 0;
  .logo img {
    max-width: 150px;
    padding: 0px 10px;
    width: 100%;
  }
  .menu {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 30px;
      &.active a {
        color: var(--primary-color);
      }
      a {
        color: #000;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        font-family: "Oswald", sans-serif;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  .head-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 40px;
      cursor: pointer;
      display: none;
      @media only screen and (max-width: 767px) {
        display: block;
      }
    }
    .close {
      text-align: right;
      display: none;
      color: var(--white);
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      &:hover{
        color: var(--primary-color);
      }
    }
    .menu-items {
      @media screen and (max-width: 767px) {
        opacity:0;
        transition:all 0.5s;
        display:block;
        padding: 20px;
        width:200px;
        background: var(--secondary-color);
        position: fixed;
        height: 100vh;
        right: 0;
        top: 0;
        z-index: 99999;
        transform: translateX(100%);
      }
      &.open .close{
        display:block;
      }
      &.open {
        opacity:1;
        transform: translateX(0);
      }
      &.open .menu {
        display: block;
        li.active a{
          color: var(--primary-color);
        }
        a {
          color: var(--white);
          display: block;
          text-align: right;
          padding-top: 20px;
        }
      }
    }
  }
`;
