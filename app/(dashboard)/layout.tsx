import '../../styles/global.css'
import GlassPane from "../../components/GlassPane";

export default function DashboardRootLayout ({children}) {
    return (
        <html lang="en">
            <head />
            <body className="h-screen w-screen candy-mesh p-6">
                <GlassPane className="w-full h-full flex item-center justify-center">
                    {children}
                </GlassPane>
                
            </body>
        </html>
    )
}