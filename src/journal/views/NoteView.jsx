import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CalendarMonthOutlined, DeleteOutline, SaveOutlined, TextFieldsOutlined, UploadFile } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";

import { ImageGallery } from "../components";
import { useForm } from '../../hooks';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";


export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { title, body, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);


    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Guardado',
                text: messageSaved,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote());
    }
    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid container spacing={0} direction="row" justifyContent="space-between" alignItems="center"
            sx={{ mb: 2 }}>
            <Grid item className="box-shadow-cian border-1 border-cian rounded-5"
                sx={{ paddingX: 4, paddingY: 2, backgroundColor: 'background.paper', mb: 2 }}
                container
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CalendarMonthOutlined sx={{ fontSize: 28, mr: 1 }} /> {dateString}
                </Typography>
                <input type="file" id="file" multiple
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={onFileInputChange}
                />
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <IconButton color="primary" aria-label="upload picture" component="span"
                        onClick={() => fileInputRef.current.click()}
                        disabled={isSaving}>
                        <UploadFile sx={{ fontSize: 28 }} />
                    </IconButton>
                    <Button sx={{ width: '100%', padding: 1 }} onClick={onSaveNote} disabled={isSaving}>
                        <SaveOutlined sx={{ fontSize: 28, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
                <Grid item sx={{ mt: 2 }} xs={12}>
                    <TextField type="text" label="Título" fullWidth placeholder="Ingrese un título" sx={{ border: 'none' }}
                        name="title"
                        value={title}
                        onChange={onInputChange}
                    />
                </Grid>
                <Grid item sx={{ mt: 1.5 }} xs={12}>
                    <TextField type="text" label="¿Qué pasó hoy?" multiline fullWidth
                        placeholder="¿Qué pasó hoy?" sx={{ border: 'none' }}
                        name="body"
                        value={body}
                        onChange={onInputChange}
                        minRows={4}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="end">
                <Button onClick={onDelete} sx={{ mt: 2 }} color="error" variant="outlined">
                    <DeleteOutline sx={{ fontSize: 18, mr: 1 }} />
                    Borrar
                </Button>
            </Grid>
            <ImageGallery images={note.imageUrls} />
        </Grid >
    )
}
