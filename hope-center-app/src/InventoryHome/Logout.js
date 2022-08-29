import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Logout = () => {
    return (
        <Link to="/">
        <Button variant="outlined" size="small">
          Logout
        </Button>
        </Link>
    )
}