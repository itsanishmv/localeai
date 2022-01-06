import React,{useContext} from 'react'
import { dataSharingPoint } from './StateContext';

function Tooltip() {
    const { region } = useContext(dataSharingPoint);
    const { usersPerRegion} = useContext(dataSharingPoint);
    return (
        <div style={{width:"300px",borderRadius:"50px", overflow:"hidden"}}>
            <h5></h5>
            <h4 style={{fontWeight:"600"}}>users {usersPerRegion.length}</h4>
            <h4>{region.properties.name}</h4>
        </div>
    )
}
export default Tooltip;