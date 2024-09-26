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
                    sx={{p: 5}}
                >
                    <Typography
                        sx = {{
                            fontSize: 32,
                        }}
                    >
                        Đăng nhập
                    </Typography>
                </Box>
                <LoginForm/>
                <Stack
                    flexDirection={'row'}
                    gap={2}
                    sx= {{
                        p: 5,
                    }}
                >
                    <Typography>
                        Không có tài khoản?
                    </Typography>   
                    <Link
                        sx={{
                            color: 'primary.light',
                            cursor: 'pointer',
                        }}
                        href= {paths.register}
                    >
                        Đăng ký
                    </Link>
                </Stack>
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