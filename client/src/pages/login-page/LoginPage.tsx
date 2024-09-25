import LoginFacebook from "@components/secsions/auth/login/LoginFacebook";
import LoginForm from "@components/secsions/auth/login/LoginForm";
import LoginGoogle from "@components/secsions/auth/login/LoginGoogle";
import paths from "@router/paths";
import { Box, Stack, Link, Typography} from "@mui/material";
import { ReactElement } from "react";

const LoginPage = () : ReactElement => {
    return (
        <Box
            sx = {{
                display: 'flex',
                justifyContent: 'center',
                width: 600,
                height: 620,
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
                    Đăng nhập
                </Box>
                <LoginForm/>
                <Box
                    sx= {{
                        p: 5,
                    }}
                >
                    Không có tài khoản?
                    <Link
                        sx={{
                            color: 'primary.light',
                            cursor: 'pointer',
                            pl: 2,
                        }}
                        href= {paths.register}
                    >
                        Đăng ký
                    </Link>
                </Box>
                <Box 
                    p={4}
                >
                    <Typography variant="body1" sx={{ mx: 2, color: 'text.secondary', zIndex: 3}}>
                        Hoặc đăng nhập bằng
                    </Typography>
                </Box>
                <Stack
                    gap={5}
                    width={"100%"}
                >
                    <LoginFacebook/>
                    <LoginGoogle/>
                </Stack>
            </Stack>
        </Box>
        
    )
}

export default LoginPage;