import React,{useContext, useEffect,useState} from 'react'
import { dataSharingPoint } from './StateContext'

function UserData() {
    const {userData,setUserData}=useContext(dataSharingPoint)

    // const userDataFetcher = async () => {
    //     const res = await fetch(" https://kyupid-api.vercel.app/api/users");
    //     const JsonData = await res.json();
    //     setUserData(JsonData);
    // };
    // useEffect(() => {
    //     userDataFetcher()
    //     return () => {
    //         userDataFetcher()
    //     }
    // },[])



    return (
        <div>
            
        </div>
    )
}

export default UserData
