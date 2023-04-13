import styled from "styled-components";

export const ContentWrapper = styled.section`
    ul{
        list-style-type: disc;
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
            }
        }
    }
    
`; 