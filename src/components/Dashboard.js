import React from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import { dataSharingPoint } from "./StateContext";
import Graph from "./Graph";

function Dashboard() {
  const { userData, usersPerRegion, region } = useContext(dataSharingPoint)

  const totalMatchPerUser = usersPerRegion.filter((user) => user.total_matches !==0)
  const matchNumbers =totalMatchPerUser.map(item => item.total_matches)
  const sumOfMatchesPerRegion=matchNumbers.reduce((acc, curr) => {
      return acc + curr
    }, 0)
    
  return (
    <DashboardContainer>
      <Header><span>Dashboard</span></Header>
      <Body>
        <Region>{region?.properties.name}  <img style={{marginLeft:"10px",height:"20px",width:"20px"}} src="location.png" alt="location" /></Region>
        <Pro> <span>pro users </span> <span>{ usersPerRegion.filter((user) => user.is_pro_user === true).length}</span> </Pro>
        <Female><span>Females</span> <span>{usersPerRegion.filter((user) => user.gender === "F").length }</span> </Female>
        <Male><span>Males</span>  <span>{ usersPerRegion.filter((user) => user.gender === "M").length}</span></Male>
        <Users><span>Users</span>  <span> {usersPerRegion.length}</span></Users>
        <Match><span>totalmatches</span><span>{ sumOfMatchesPerRegion}</span></Match>
        <Revenue><div>Revenue</div>{userData.users?.filter(user => user.is_pro_user === true).length}</Revenue>
          <Graph />
      </Body>

    
    </DashboardContainer>
  );
}

export default Dashboard;
// styles
// #1e1e1e
const DashboardContainer = styled.div`
  background-color: #272E39;
  width: 310px;
 
`;
const Header = styled.div`
  display: flex;
  
  align-items: center;
  background-color: #1E1E1E;
  height: 50px;
  color: #f0e5e5;
  font-weight: 600;
  
  span{
    border-bottom:1px solid grey;
    width:250px;
    margin-left:10px;
    
    padding:13px;
  }
`;
const Body = styled.div`
  background-color: rgb(39, 46, 57);
  height: 500px;
  border-radius: 10px;
  margin-top: 50px;
  margin-left:-8px;
  color: white;
`;

const Pro = styled.div`
  display:flex;
  align-items:center;
  
  justify-content:space-between;
  font-size:15px;
  color:#B0B2B7;
  padding:10px;
  background-color:#1e1e1e;
  border-radius:5px;
  height:30px;
  width:270px;
  margin-left:15px;
  font-weight:600;  
  
  span{
    color:#B2994C;
    width:30px;
    font-weight:600;
    
  }

`
const Female = styled(Pro)`
  margin-top:5px;
  margin-bottom:5px;
  span{
    color:#0BA273;
   
   
  }
`
const Male = styled(Pro)`
   margin-top:5px;
  margin-bottom:5px;
  span{
    color:#0BA273;
  
  }
`
const Users = styled(Pro)`
span{
    color:#0BA273;
  }
  
`
const Region = styled(Pro)`
  display:flex;
  justify-content:center;
`
const Revenue = styled(Pro)`
  margin-top:10px;  
  height:50px;
  font-size:30px;
`
const Match = styled(Pro)`
  color:#0BA273;
`