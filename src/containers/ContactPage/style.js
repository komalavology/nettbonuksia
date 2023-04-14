import styled    from "styled-components";

export const  FormWrapper = styled.section`
    padding: 50px 0;
    img{
        width:100%;
        height:100%;
        padding:5px;
        object-fit:cover;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 10px;
    }
    h2 {
        font-size: 30px;
        font-weight: 500;
        position: relative;
        margin-bottom: 60px;
        color: rgb(182, 20, 44);
        &::after {
            position: absolute;
            bottom: -22px;
            content: "";
            left: 0px;
            height: 4px;
            width: 70px;
            background: rgb(182, 20, 44);
        }
    }
    button{
            position: relative;
            background: var(--primary-color) !important;
            display: block;
            text-align: center;
            width:auto;
            color: var(--white) !important;
            font-weight: 600;
            transition: all 0.5s ease 0s;
            padding:10px 30px;
            margin:40px 0;
            border-radius:none !important;
            &:hover{
                background: var(--secondary-color) !important
            }
    }
`;