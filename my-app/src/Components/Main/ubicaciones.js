import { Box, Grid, Button, useTheme } from '@mui/material';
import { useState } from "react";

const cines = {
    rivera: {
        name: "Cine Rivera Indarte",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109053.22104259249!2d-64.43545818328859!3d-31.333771352962206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329dcb63f60ead%3A0x7dd4cf47ec31915c!2sSunstar%20Cinemas!5e0!3m2!1ses!2sar!4v1686609691637!5m2!1ses!2sar"
    },
    showcase: {
        name: "Cine Showcase",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13624.822778759086!2d-64.23319994106458!3d-31.380891359455944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298e16b63e573%3A0x760776315c3610e6!2sShowcase%20Cinemas!5e0!3m2!1ses!2sar!4v1686610623773!5m2!1ses!2sar"
    },
    olmos: {
        name: "Cine Patio Olmos",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.790575879313!2d-64.19065842537954!3d-31.419895596419234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28419faef87%3A0x10c2f52766185d7f!2sCine%20Hoyts%20%5BHoyts%20Patio%20Olmos%5D%20%7C%20Hoyts%20General%20Cinema%20de%20Argentina%20S.A.%20%7C%7C%20Cinemark%20Hoyts!5e0!3m2!1ses!2sar!4v1686610707306!5m2!1ses!2sar"
    },
    dino: {
        name: "Cine Dinosaurio Mall",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27253.76922721981!2d-64.25410498916018!3d-31.366673200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329918087ebe7d%3A0x247780b207d99d01!2sCines%20Dinosaurio%20Mall%20Alto%20Verde!5e0!3m2!1ses!2sar!4v1686610834369!5m2!1ses!2sar"
    },
    vas: {
        name: "Cine VAS",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54546.20222206377!2d-64.34884428977965!3d-31.299940723647808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d67af1f6a87%3A0xa71b85dffa0b7037!2sShowcase%20Cinemas!5e0!3m2!1ses!2sar!4v1686610898769!5m2!1ses!2sar"
    },

};




export default function Ubicaciones() {
    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();
    const [ubi, setUbi] = useState(cines.rivera.url)
    return (
        <Box sx={{
            margin: "0",
            padding: "15px",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "10px",
            backgroundColor: "#251F1F",
            textAlign: "center"
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <iframe src={ubi} maxWidht="100%" maxHeight="100%" display="block" border="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mapa'></iframe>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button onClick={() => setUbi(cines.rivera.url)} color="secondary">{cines.rivera.name}</Button>
                    <Button onClick={() => setUbi(cines.showcase.url)} color="secondary">{cines.showcase.name}</Button>
                    <Button onClick={() => setUbi(cines.olmos.url)} color="secondary">{cines.olmos.name}</Button>
                    <Button onClick={() => setUbi(cines.dino.url)} color="secondary">{cines.dino.name}</Button>
                    <Button onClick={() => setUbi(cines.vas.url)} color="secondary">{cines.vas.name}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}