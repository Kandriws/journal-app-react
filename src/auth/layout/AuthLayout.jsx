import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', padding: 4, overflowX: 'hidden' }}
        >
            <Grid className="box-shadow-cian rounded-8 border-1 border-cian animate__animated animate__fadeIn animate__faster"
                sx={{ padding: 4, backgroundColor: 'background.paper', width: { xs: '100%', sm: 450 } }}
            >
                <Typography variant="h4">{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}
