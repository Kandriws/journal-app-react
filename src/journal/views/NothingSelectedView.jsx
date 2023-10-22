import { StarOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)' }}
        >
            <Grid item
                className="box-shadow-cian rounded-8 border-1 border-cian "
                sx={{ padding: 4, backgroundColor: 'background.paper' }}
            >

                <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StarOutlined sx={{ fontSize: 40 }} />Nothing Selected
                </Typography>
                <Typography variant="body1">Select something</Typography>
            </Grid>
        </Grid>
    )
}
