import "./App.css";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import { useEffect, useContext, useState } from "react";
import { dataSharingPoint } from "./components/StateContext";

function App() {
  const [loading, setLoading] = useState(false);
  const { Geodata, setGeoData, userData, setUserData } =
    useContext(dataSharingPoint);

  useEffect(() => {
    userDataFetcher();
    geoDataFetcher();
  }, []);

  const userDataFetcher = async () => {
    const res = await fetch(" https://kyupid-api.vercel.app/api/users");
    const JsonData = await res.json();
    setUserData(JsonData);
  };
  const geoDataFetcher = async () => {
    setLoading(false);
    const res = await fetch("https://kyupid-api.vercel.app/api/areas");
    const JsonData = await res.json();
    setLoading(true);
    setGeoData(JsonData);
  };

  return (
    <div className="app">
      {!loading ? (
        <img
          style={{ marginLeft: "650px", marginTop: "200px" }}
          src="loading.svg"
          alt=""
        />
      ) : (
        <>
          <Dashboard />
          {Geodata.features && userData.users && (
            <Map userData={userData} data={Geodata} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
