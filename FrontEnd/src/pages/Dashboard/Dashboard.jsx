import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Space, Statistic, Typography } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import { useEffect, useState } from "react";
import { get, ref, onValue } from "firebase/database";
import { db } from "../../services/firebase"; // Importe os elementos específicos do firebase.js
import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";
import SideMenu from "../../components/SideMenu/SideMenu";

// Restante do código do Dashboard

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [quizCount, setQuizCount] = useState(0);
  const [participants, setParticipants] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Obter a quantidade de quizzes realizados
    const quizCountRef = ref(db, "/quizCount");
    onValue(quizCountRef, (snapshot) => {
      setQuizCount(snapshot.val() || 0);
    });

    // Obter os participantes
    const participantsRef = ref(db, "/participants");
    onValue(participantsRef, (snapshot) => {
      const participantsData = snapshot.val() || [];
      const participantsList = Object.keys(participantsData);
      setParticipants(participantsList);
    });

    // Obter os resultados de cada participante
    const resultsRef = ref(db, "/results");
    onValue(resultsRef, (snapshot) => {
      setResults(snapshot.val() || []);
    });
  }, []);

  return (
    <div className="AppContent">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <Space size={20} direction="vertical">
          <Typography.Title level={4}>Dashboard</Typography.Title>
          <Space direction="horizontal">
            <DashboardCard
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                  }}
                />
              }
              title={"Quizzes Realizados"}
              value={quizCount}
            />
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                  }}
                />
              }
              title={"Participantes"}
              value={participants.length}
            />
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  style={{
                    color: "red",
                    backgroundColor: "rgba(255,0,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                  }}
                />
              }
              title={"Resultados"}
              value={results.length}
            />
          </Space>
          <Typography.Title level={5}>Lista de Participantes:</Typography.Title>
          <ul>
            {participants.map((participant) => (
              <li key={participant}>{participant}</li>
            ))}
          </ul>
          <Typography.Title level={5}>Resultados dos Participantes:</Typography.Title>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{`${result.participant}: ${result.score}`}</li>
            ))}
          </ul>
        </Space>
      </div>
      <AppFooter />
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Space direction="horizontal">
      {icon}
      <Statistic title={title} value={value} />
    </Space>
  );
}

export default Dashboard;
