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

export const BrandsWrapper = styled.section`
    img{
        width:100%;
        max-width:200px;
        display:block;
    }
    .stars{
        max-width:150px;
        margin: 20px 0 0;
    }
    .brand-row{
        background: rgb(249, 252, 255);
        padding:20px;
        border-radius:10px;
        margin-bottom:30px;
        box-shadow:0px 0px 15px 3px #dddddd69;
        div{
            @media screen and (max-width:991px){
            padding: 0 5px;
            }
            @media screen and (max-width:600px){
                padding: 10px;
            }
        }
        @media screen and (max-width:991px){
           padding: 20px 5px;
        }
    }
    .score-sec{
        .title{
            text-align:center;
            @media screen and (max-width:991px){
                text-align: left;
                font-size: 14px;
        }
        }
    }
    .score {
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        line-height: 10px;
        @media screen and (max-width:991px){
            text-align: left;
            font-size: 20px;
        }
    }
`;

export const Link = styled.a`
    position:relative;
    background:var(--primary-color);
    display:inline-block;
    text-align:center;
    padding:10px 0;
    width:auto;
    padding:10px 30px;
    max-width:100%;
    margin-right:0;
    margin-left:auto;
    color: var(--white);
    font-weight:600;
    transition: .5s;
    &:hover{
        color: var(--white);
        background: var(--secondary-color);
    }
    @media screen and (max-width:991px){
        font-size:14px;
        padding: 10px 15px;
    }
    @media screen and (max-width:767px){
        font-size:12px;
        padding:10px;
    }
`;
export const Address = styled.div`
    b{
        display:block;
        margin-bottom:5px;
    }
    font-size:18px;
    p{
        margin:0;
        font-size:16px;
        line-height:22px;
        @media screen and (max-width:767px){
            font-size:14px;
        }

    }
`;