import { AddOutlined, TextFieldsOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal"
import { CheckingAuth } from "../../ui"

export const JournalPage = () => {
    const { isSaving, active } = useSelector(state => state.journal);

    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>
            {
                isSaving ? <CheckingAuth /> : !!active ? <NoteView /> : <NothingSelectedView />
            }
            {/* <NothingSelectedView /> */}

            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 100,
                    color: 'white',
                    backgroundColor: 'primary.main',
                    ':hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}
                aria-label="add"
                size="large"
                onClick={onClickNewNote}
                disabled={isSaving}
            >
                <AddOutlined sx={{ fontSize: 28, color: 'background.paper', '&:hover': { color: 'white' } }} />
            </IconButton>
        </JournalLayout>
    )
}
