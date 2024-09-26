import RegisterForm from "@/components/secsions/auth/register/RegisterForm";
import paths from "@/router/paths";
import { Box, Stack, Link, Typography} from "@mui/material";
import { ReactElement } from "react"


const SettingPage = () : ReactElement => {
    return (
        <Box
            sx = {{
                display: 'flex',
                justifyContent: 'center',
                width: 600,
                height: 640,
                minWidth: 400,
                borderRadius: 3,
                backgroundColor: 'background.paper',
                userSelect: 'none'
            }}
        >
            <Stack 
                flexDirection={'column'}
                alignItems={'center'}
                width={"70%"}
            >
                <Box
                    sx={{fontSize: 32, p: 5}}
                >
                    Đăng Ký
                </Box>
                <Stack
                    flexDirection={'row'}
                    gap={2}
                    sx= {{
                        pb: 5,
                    }}
                >
                    <Typography>
                        Đã có tài khoản?
                    </Typography>   
                    <Link
                        sx={{
                            color: 'primary.light',
                            cursor: 'pointer',
                        }}
                        href= {paths.login}
                    >
                        Đăng nhập
                    </Link>
                </Stack>
                <RegisterForm/>
                
            </Stack>
        </Box>
    )
}

export default SettingPage;