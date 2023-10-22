import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth }) => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }
    
    return (
        <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                bgcolor: 'background.paper',
                color: 'text.primary',
            }}

        >
            <Toolbar>
                <IconButton color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>
                <Grid container justifyContent="space-between" direction="row">
                    <Typography variant="h6" noWrap component="div">
                        Journal
                    </Typography>
                    <IconButton aria-label="menu" color="primary" onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
