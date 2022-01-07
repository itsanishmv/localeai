import React,{useContext} from 'react'
import { dataSharingPoint } from './StateContext';

function Tooltip() {
    const { region } = useContext(dataSharingPoint);
    const { usersPerRegion} = useContext(dataSharingPoint);
    return (
        <div style={{maxWidth:"550px", backgroundColor:"white",padding:"5px",color:"#B0B2B7"}}>
           
            <div style={{fontSize:"20px"}}>
                 <h4>{region.properties.name}</h4>
            </div>
            <h4 style={{fontWeight:"600"}}>users {usersPerRegion.length}</h4>
            
        </div>
    )
}
export default Tooltip;