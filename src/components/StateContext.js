import React, { createContext, useState } from "react";

export const dataSharingPoint = createContext();

function StateContext(props) {
  const [Geodata, setGeoData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [usersPerRegion, setUsersPerRegion] = useState([]);
  const [region, setRegion] = useState();
  // const [regionHover, setRegionHover] = useState()
  // const [ usersPerRegionHover, setUsersPerRegionHover] = useState()
  return (
    <dataSharingPoint.Provider
      value={{
        userData,
        setUserData,
        Geodata,
        setGeoData,
        usersPerRegion,
        setUsersPerRegion,
        region,
        setRegion,
        // usersPerRegionHover,
        // setUsersPerRegionHover,
        // regionHover,
        // setRegionHover
      }}
    >
      {props.children}
    </dataSharingPoint.Provider>
  );
}

export default StateContext;
