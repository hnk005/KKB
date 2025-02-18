import Auth from "@/components/Auth";
import DialogCommon from "@/components/Common/DialogCommon";
import { UserInterface } from "@/core/interface";
import { createContext, useState } from "react";

interface AuthProviderInterface {
    user: UserInterface | null,
    token: string | null,
    handleOpenLogin: () => void,
    handleOpenRegister: () => void,
    register: (name: string, email: string, password: string) => void,
    login: (email: string, password: string) => void,
    logout: () => void,
    isReady: boolean,
}

export const AuthContext = createContext<AuthProviderInterface>({} as AuthProviderInterface);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [openAuth, setOpenAuth] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [user, setUser] = useState<UserInterface | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false);

    const login = (email: string, password: string) => {
    }

    const register = (name: string, email: string, password: string) => {

    }

    const logout = () => {
        setIsReady(false);
    }

    const handleOpenLogin = () => {
        setOpenAuth(true)
        setOpenLogin(true);
    }

    const handleOpenRegister = () => {
        setOpenAuth(true)
        setOpenLogin(false);
    }

    return (
        <>
            <DialogCommon
                open={openAuth}
                onClose={() => setOpenAuth(false)}
                children={<Auth openLogin={openLogin} />}
            />
            <AuthContext.Provider value={{user, token, handleOpenLogin, handleOpenRegister, login, register, isReady, logout}}>
                {children}
            </AuthContext.Provider>
        </>

    )
}

export default AuthProvider;