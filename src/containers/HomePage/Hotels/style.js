import styled from "styled-components";

export const HotelsSec = styled.section`
    .item{
        padding: 20px 10px;
    }
    .card-carousel{
        .owl-prev span, .owl-next span{
            font-size:50px;
            color: var(--primary-color);
            &:hover{
                color:var(--secondary-color);
                background:none !important;
            }
            &:focus{
                background:none !important;
            }
        }
        button.owl-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left:-20px;
            &:hover{
                background:none;
            }
        }
        .owl-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right:-20px;
            &:hover{
                background:none;
            }
        }
    }
`;