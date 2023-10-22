import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { setActiveNote } from "../../store/journal/journalSlice";

const length = 15;

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();
    const shortTitle = useMemo(() => {
        if (title.length > length) {
            return title.slice(0, length) + '...'
        }
        return title
    }, [title]);

    const onNoteClick = () => {
        dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    }
    return (
        <ListItem >
            <ListItemButton onClick={onNoteClick}>
                <ListItemIcon>
                    <TurnedInNot color="primary" />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={shortTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
