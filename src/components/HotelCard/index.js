import { Card, CardMedia, CardContent, CardActions} from "@mui/material"
import Img from "../../assets/banner.png";
import { HotelWrapper } from "./style";
import { CardHeading, CardLink, Address} from "./style";
import { Paragraph } from "../typography";

export const HotelCard = ({data}) => {
    console.log(data)
    return(
        <Card>
            <CardMedia
            sx={{ height: 250 }}
            image={data?.img}
            title="Image"
            />
            <CardContent>
                <CardHeading>{data?.name}</CardHeading>
                <Address>
                    <b>Address:</b>
                    <Paragraph>{data?.address}</Paragraph>
                </Address>
            </CardContent>
            <CardActions>
                <CardLink href={data?.link} class="more">Know More</CardLink>
            </CardActions>
        </Card>
    )
}