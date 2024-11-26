import dashjs from "dashjs";
import { useEffect, useState } from "react";

function VideoPlayer({ videoId }) {
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        if (!videoId) {
            return;
        }
        const getWatchObject = async () => {
            const watchUrl = "http://localhost:8080/api/v1/videos/watch?id=" + videoId;
            const res = await fetch(watchUrl);
            const result = await res.json();
            console.log(result);
            setVideoUrl(result.url);
        }
        getWatchObject();
    })

    if (videoUrl) {
        let player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), videoUrl, true);
    }
    return <>
        {
            videoUrl
                ? (
                    <>
                        <video id="videoPlayer" controls></video>
                    </>
                )
                : <h2>No video found</h2>
        }

    </>
}

export default VideoPlayer;