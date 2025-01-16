import { useParams } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import API from "../../Api";
import Activity from "../../components/activity/Activity";
import AverageSession from "../../components/average-session/AverageSession";
import Performance from "../../components/performance/Performance";
import Score from "../../components/score/Score";
import Calories from "../../components/calories/Calories";

const Dashboard = () => {
  const params = useParams();
  const [userData, setUserData] = useState();
  const [activity, setActivity] = useState();
  const [averageSession, setAverageSession] = useState();
  const [performance, setPerformance] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const api = new API();
      await api
        .getUser(parseInt(params.id))
        .then((res) => {
          if (!res.data) {
            setError(true);
          }
          setUserData(res);
        })
        .catch(() => setError(true));

      await api
        .getActivity(parseInt(params.id))
        .then((res) => {
          if (!res.data) {
            setError(true);
          }
          setActivity(res);
        })
        .catch(() => setError(true));

      await api
        .getAverageSessions(parseInt(params.id))
        .then((res) => {
          if (!res.data) {
            setError(true);
          }
          setAverageSession(res);
        })
        .catch(() => setError(true));

      await api
        .getPerformance(parseInt(params.id))
        .then((res) => {
          if (!res.data) {
            setError(true);
          }
          setPerformance(res);
        })
        .catch(() => setError(true));
    })();
  }, []);

  return error ? (
    <div>L'utilisateur n'existe pas</div>
  ) : userData && activity && averageSession && performance ? (
    <div>
      <h1>Bonjour {userData.data.userInfos.firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="charts-container">
        <div>
          <Activity data={activity.data} />
          <div className="charts-stats">
            <AverageSession data={averageSession.data} />
            <Performance data={performance.data} />
            <Score data={userData.data} />
          </div>
        </div>
        <div>
          <Calories data={userData.data} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Dashboard;
