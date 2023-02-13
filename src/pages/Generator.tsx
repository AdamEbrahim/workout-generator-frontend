import React from "react";
import SimpleAccordion from "../components/settingsAccordion";
import Container from '@mui/material/Container';
import Routine from "../components/routine/routine";

const Generator = () => {
    return(
        <Container maxWidth = "md">
            <SimpleAccordion />
            <Routine />
        </Container>
    );
}

export default Generator;