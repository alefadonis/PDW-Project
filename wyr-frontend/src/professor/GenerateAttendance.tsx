import DashboardLayout from "../components/DashboardLayout";
import QRCodeForm from "../components/QRCodeForm";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Gerar Presença</h1>
      <QRCodeForm/>
    </DashboardLayout>
  );
};

export default Dashboard;
