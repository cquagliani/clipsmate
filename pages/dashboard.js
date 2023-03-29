import DashboardHeader from "@component/components/dashboardHeader";
import List from '@component/components/list'
import ProtectedRoute from "../components/protectedRoute";
import AccordionComponent from "@component/components/accordion";

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div>
                <DashboardHeader />
                <div className="h-screen w-screen px-[10%] py-24">
                    <div className="flex flex-col justify-start">
                        <div className="flex flex-row justify-between px-2">
                            <h1 className="font-bold text-3xl align-left">Dashboard</h1>
                        </div>
                        <List />
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default Dashboard;