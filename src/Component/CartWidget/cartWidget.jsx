
import { Badge } from "@mui/material";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Cartwidget = () => {
    return (
        <Link to="/cart">
            <Badge badgeContent={0} color="primary" showZero>
            <ShoppingCartIcon color="primary" />
            </Badge>
        </Link>
    )
}

export default Cartwidget;