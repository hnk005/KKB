import { ReactElement } from "react"
import logo from "@assets/images/logo/Logo.png";

const Logo = (): ReactElement => {
    return (
        <div className="flex lg:flex-1 select-none">
            <a href="/" className="flex -m-1.5 p-1.5 items-center">
                <img
                    alt=""
                    src={logo}
                    className="h-20 w-auto max-md:h-16"
                />
                <span className="text-2xl font-semibold text-green-400">KKB</span>
            </a>
        </div>
    )
}

export default Logo;