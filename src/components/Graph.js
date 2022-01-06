import React from 'react'
import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import { useContext } from 'react/cjs/react.development'
import { dataSharingPoint } from './StateContext'

function Graph() {
    const { usersPerRegion } = useContext(dataSharingPoint)
   const males= usersPerRegion.filter((user) => user.gender === "M").length 
    const females = usersPerRegion.filter((user) => user.gender === "F").length 
    const data = {
        lables: ['females','males'],
        datasets: [
            {
                data: [females,males],
                backgroundColor: [
                    "#232D32",
                    "#5891BC"
                   
                ],
                borderWidth: [
                    "0",
                    "0"
                ],
                borderColor: [
                    "#1E1E1E"
                ]
            }
        ]
    }
    return (
        <div style={{borderRadius:"15px",padding:"10px",display:"flex", transform: "translateX(1120px)", zIndex: "10", position: "fixed", top: "50px", left: "100px",backgroundColor:"#1E1E1E" }}>
           
            <div style={{height: "100px", width: "100px"}}>
                <Doughnut style={{}} data={ data}/>
            </div>
            <div style={{width:"150px"}}>
                <h4 style={{ color: "#B0B2B7",marginLeft:"10px" }}> Male to Female ratio  </h4>
                <div ><span style={{ borderRadius:"50%",width: "5px", height: "5px", backgroundColor: "#5891BC", color: "#5891BC" }} >" "</span> <span style={{color:"#B0B2B7",marginLeft:"10px",fontWeight:"800"}}>M</span> </div>
                <div ><span style={{ borderRadius:"50%",width:"5px",height:"5px",backgroundColor:"#1C2931",color:"#1C2931"}} >" "</span> <span style={{color:"#B0B2B7",marginLeft:"10px",fontWeight:"800"}}>F</span></div>
            </div>
            
           
        </div>
    )
}

export default Graph
