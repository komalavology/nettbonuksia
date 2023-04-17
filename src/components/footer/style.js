import styled from "styled-components";

export const FooterWrapper = styled.footer`
        position:relative;
        background: var(--secondary-color);
        padding:40px 0 0;
        .logo{
            text-align:center;
            display:block;
            img {
                max-width: 150px;
                filter: brightness(0) invert(1);
            }
        }
        .menu{
            display:flex;
            justify-content:center;
            padding-left:0;
            margin-bottom:30px;
            flex-wrap:wrap;
            li{
                &:first-child{padding-left:0;}
                padding-left:15px;
                a{
                    color:var(--white);
                    &:hover{
                        color:var(--primary-color);
                    }
                }
                ::marker {
                    content: none;
                  }
            }
            
        }
        .copyright{
            color: var(--white);
            text-align:center;
            border-top: 1px solid rgba(221, 221, 221, 20%);
            margin:0;
            padding:10px 0;
            font-size: 14px;
        }
`