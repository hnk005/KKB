import { Box } from "@mui/material";
import { ReactElement } from "react"


const LoginPage = () : ReactElement => {
    return (
        <Box   
            sx = {{
                width: 600,
                height: 680,
                zIndex: 999,
                borderRadius: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // position: 'absolute',
                // top: 100,
                // right: 550,
            }}
        >

        </Box>
    )
}

export default LoginPage;