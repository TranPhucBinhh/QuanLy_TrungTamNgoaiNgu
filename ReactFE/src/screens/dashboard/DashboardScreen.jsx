import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components/Admin-Dashboard";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default Dashboard;
