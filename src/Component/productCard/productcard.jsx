import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img}) => {
    return (
        <Card sx={{ Width: 345 }}>
      <CardMedia
        sx={{ height: 140, width: "100%" }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
        <Button size="small" variant="outline">ver mas</Button>
        </Link>
      </CardActions>
    </Card>
        );
    };