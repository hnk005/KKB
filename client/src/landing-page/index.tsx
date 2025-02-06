import { ReactElement, useState } from "react"
import Header from "./Header";
import Sidebar from "./Sidebar";
import DialogCommon from "@components/common/DialogCommon";
import Content from "./Content";
import bestSaller from "@assets/images/intro/best-saller.png";


const LandingPage = () : ReactElement => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    }
    
    return (
        <div className="container mx-auto bg-slate-900">
            <Header handleOpenSidebar = {handleOpenSidebar}/>
            <div className="flex justify-center bg-yellow-300 select-none">
                <img src= {bestSaller} className="w-[50%] max-w-[300px] min-w-[100px] h-[10vw] max-h-[50px] min-h-[25px] object-cover"></img>
            </div>
            <DialogCommon
                open = {openSidebar}
                children = {<Sidebar handleCloseSidebar = {handleCloseSidebar}/>}
                onClose= {handleCloseSidebar}
            />
            <Content/>
        </div>

    )
}

export default LandingPage;