import styled from "styled-components";

export const ContentWrapper = styled.section`
  padding: 40px 0;
    h2{
        color:var(--primary-color);
    }
    h3{
        font-weight:500;
    }
    ul{
        list-style-type: disc;
        @media only screen and (max-width:767px){
            padding-left:20px;
        }
        li{
            color: var(--grey);
            font-size: 16px;
            line-height: 24px;
            padding-bottom:5px;
            ul{
                list-style-type:circle;
                padding-bottom:10px;
            }
            ol {
                list-style: lower-alpha;
                padding-bottom:10px;
                @media only screen and (max-width:767px){
                    padding-left:20px;
                }
            }
        }
    }
    p{
        a{
            color:var(--grey);
            text-decoration:underline;
            &:hover{
            color: var(--primary-color);
            }
        }
    }
    
`; 