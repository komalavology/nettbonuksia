import React from "react";
import { BannerWrapper } from "./style";

export const SubBanner = (props) => {
    return(
        <BannerWrapper>
            <h1>{props.heading}</h1>
        </BannerWrapper>
    )
}