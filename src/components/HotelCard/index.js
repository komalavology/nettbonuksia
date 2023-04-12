import { Card, CardMedia, CardContent, CardActions} from "@mui/material"
import { CardHeading, CardLink, Address, CardBottom} from "./style";
import { Paragraph } from "../typography";

export const HotelCard = ({data}) => {
    console.log(data)
    return(
        <Card style={{boxShadow: "none"}}> 
            <CardMedia
            sx={{ height: 200 }}
            image={data?.img}
            title="Image"
            />
            <CardBottom>
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
            </CardBottom>
        </Card>
    )
}