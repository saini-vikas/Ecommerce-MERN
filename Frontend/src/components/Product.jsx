/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function Product(props) {
  return (
    <Card sx={{ maxWidth: 300, width: { xs: "80%", sm: "45%", md: "40%" } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props.thumbnail}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>

          <Typography
            component="div"
            variant="body2"
            noWrap={true}
            color="text.secondary"
          >
            {props.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingY: 2,
        }}
      >
        <Typography>$ {props.price.toFixed(2)}</Typography>
        <Button
          size="small"
          color="info"
          variant="contained"
          startIcon={<ShoppingCart />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
