import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);


    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer variant="permanent"
                open anchor="left"
                sx={{
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'background.sidebar' },
                    display: { xs: 'block' },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>
                    <Divider />
                </Toolbar>
                <List>
                    {
                        notes.map((note, index) => (
                            <SideBarItem key={index}  {...note} />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
