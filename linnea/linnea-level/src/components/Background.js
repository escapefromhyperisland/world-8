import React, {useState} from "react";
import MirrorImg from "./images/mirror.jpg";
import WallpaperImg from "./images/wallpaper.jpg";

function Background () {

    const [background, setBackground] = useState (MirrorImg);

    return (
    <div>
        <img id="Background" src={background}></img>
    </div>
    )
}

export default Background