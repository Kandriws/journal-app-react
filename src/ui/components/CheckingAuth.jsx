import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', padding: 4 }}
        >
            <Grid display="flex" justifyContent="center" alignItems="center"
                sx={{ width: { xs: '100%', sm: 450 } }}
            >
                <CircularProgress color="primary"
                    className="box-shadow-cian border-1 border-cian "
                    sx={{ borderRadius: 50, padding: '5px' }} />
            </Grid>
        </Grid>
    )
}
