import Navbar from "../components/navbar";



export default function Layout({ children } ) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
            <Navbar />
            </div>
           
        </div>
    )
}