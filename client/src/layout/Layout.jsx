import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export const AppLayout = () => (Wrappedcomponent) => {
    return (props) => {
        return (
            <div className="w-full text-[13px] text-white bg-black flex items-center justify-center h-[100vh]">
                <div className="w-full flex h-[95%]">

                    <Sidebar />
                    <div className="w-[calc(100%-500px)]">
                        <Navbar />
                        <Wrappedcomponent {...props} />
                    </div>

                </div>

            </div>
        )
    }
}