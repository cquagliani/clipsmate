import DashboardHeader from "@component/components/dashboardHeader";
import List from '@component/components/list'

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="h-screen w-screen bg-blue-100 px-[10%] py-24">
                <div className="flex flex-col justify-start">
                    <div className="flex flex-row justify-between px-8">
                        <h1 className="font-bold text-3xl align-left">Dashboard</h1>
                    </div>
                    <List />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;