import React from 'react';

const Home=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#FFFFFF",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"black",fontFamily:"Microsoft JhengHei"}}>我是首頁</h1>
        </div>
    )
}

export default Home;