import React, { useState, useRef, ReactDOM, useEffect } from "react";
import engravings from "./engravings";

const icons = importIcons(require.context('./engravingIcons', false, /\.(png|webp|jpe?g|svg)$/));

function importIcons(r) {
    let icons = [];
    r.keys().map((item) => {icons[item.replace('./','')] = r(item); } );
    return icons
}

let clickedEngravings = []

const EngravingIcons = (props) => {
    
    const hoverOver = (e) => {
        let icon = e.target.id
        
        for (let i = 0; i <= engravings.length; i++) {
            if (icon === engravings[i].id) {
                setIsHovering (engravings[i].nodes)
                setEngName (engravings[i].name)
            }
        }
    }
    
    const selectedEngravings = (e) => {
        let webp =  <img src = {icons[`${e.target.alt}`]}/>;
        let png = <img src = {icons[`${e.target.alt}`]} />;
        let duplicateEng = Object.keys(icons)

        if (webp == e.target.alt && clickedEngravings.includes(duplicateEng) == false) {
            clickedEngravings.push(webp)
        } else {
            clickedEngravings.push(png)
        }
        
        if (clickedEngravings.length >= 5) {
            setEngBuild([clickedEngravings])
        } else {
            setEngBuild([...clickedEngravings])
        }  
    }

    const [isHovering, setIsHovering] = useState();
    const [engName, setEngName] = useState("Hover Over and Icon for Details")
    const [engBuild, setEngBuild] = useState([])

return (
<div className="Engravings">
    <h1>Select Five Engravings</h1>
    <img src={icons['adrenaline.webp']} id="299" alt="adrenaline.webp" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['allout.webp']} id="300" alt="allout.webp" onMouseEnter={hoverOver} onClick={selectedEngravings} />
    <img src={icons['barrage.png']} id="193" alt="barrage.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['cursed.png']} id="247" alt="cursed.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['firepower.png']} id="130" alt="firepower.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['grudge.png']} id="118" alt="grudge.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['keenblunt.png']} id="141" alt="keenblunt.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <img src={icons['raidcaptain.png']} id="254" alt="raidcaptain.png" onMouseEnter={hoverOver} onClick={selectedEngravings}/>
    <div className="name">Name: {engName}</div>
    <div className="desc">Description: {isHovering}</div>
    <br></br>
    <br></br>
    <div className="selected">{engBuild}</div>
    <button>Run Calculator</button>
</div>
    )
}



export default EngravingIcons