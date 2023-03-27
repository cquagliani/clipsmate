import DashboardHeader from "@component/components/dashboardHeader";
import ListItem from "@component/components/listItem";
import GhostListItem from "@component/components/ghostListItem";

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="h-screen w-screen bg-blue-100 px-[10%] py-24">
                <div className="flex flex-col justify-start">
                    <div className="flex flex-row justify-between px-8">
                        <h1 className="font-bold text-3xl align-left">Dashboard</h1>
                    </div>
                    <div className="flex justify-stretch items-center">
                        <div className="flex flex-col gap-4 border border-solid border-black rounded-3xl p-10 w-full h-full mt-12 bg-gray-100 bg-opacity-60 min-w-fit">
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <GhostListItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;