import DashboardHeader from "@component/components/dashboardHeader";

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex justify-center items-center h-screen w-screen bg-blue-100">
                <p>Login successful. Welcome to your dashboard!</p>
            </div>
        </div>
    );
}

export default Dashboard;