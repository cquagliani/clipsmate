import DashboardHeader from "@component/components/dashboardHeader";
import List from '@component/components/list'
import ProtectedRoute from "../components/protectedRoute";
import Grid from '@mui/material/Grid'
import TaskList from "@component/components/taskList";

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div className="bg-light h-full md:h-screen">
                <DashboardHeader />
                <div className="px-[10%] py-24">
                <h1 className="font-bold text-3xl align-left">Dashboard</h1>
                    <Grid container spacing={{ xs: 2, lg: 4 }} direction={{xs: "column", lg: "row" }} justifyContent={{ xs: "stretch", lg: "between" }}>
                        <Grid item md={7}>
                            <List />
                        </Grid>
                        <Grid item md={5}>
                            <TaskList />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default Dashboard;