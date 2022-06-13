import React from "react";
import Particles from "react-tsparticles";
import json from "./config.json"
import particleConfig from "./particle-config";
const Particled=()=>{
    return (
        <Particles params={particleConfig}></Particles>
    );
}

export default Particled;