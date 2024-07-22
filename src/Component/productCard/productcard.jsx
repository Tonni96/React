import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: "100%"}}
        image= {img}
        title="green iguana"
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="Black">
            {description}
        </Typography>
        <Typography variant="body2" color="Black">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
        <Button size="small">Ver mas </Button>
        </Link>
      </CardActions>
    </Card>
        );
    };