import DashboardHeader from "@component/components/dashboardHeader";
import List from '@component/components/list'
import ProtectedRoute from "../components/protectedRoute";
import Grid from '@mui/material/Grid'
import TaskList from "@component/components/taskList";

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <div className="bg-slate-300 h-screen">
                <DashboardHeader />
                <div className="px-[10%] py-24">
                <h1 className="font-bold text-3xl align-left">Dashboard</h1>
                    <Grid container spacing={4} direction="row" justifyContent="between">
                        <Grid item xs={7}>
                            <List title="My Clips" />
                        </Grid>
                        <Grid item xs={5}>
                            <TaskList />
                        </Grid>
                    </Grid>
                    {/* <Grid container spacing={4} direction="row" justifyContent="" alignItems="center">
                        <Grid item xs={12}>
                            <List title="Clipboard History"/>
                        </Grid>
                    </Grid> */}
                </div>
            </div>
        </ProtectedRoute>
    );
}

export default Dashboard;