"use client";
import { useRef, useState } from "react";
import Overlay from "../overlay";
import videoStyle from "@/styles/components/video/video.module.scss";
import vid from "@/src/assets/videos/vid.mp4";
// const vid = require("@/src/assets/videos/vid.mp4");
import Button from "../button";
const Video = () => {
    const [ads, setAds] = useState(false);
    const videoPlayer = useRef<any>(null);
    const [viewBackground, setViewBackground] = useState(true);
    const playAds = () => {
        videoPlayer.current.play();
        let timerId = setTimeout(() => {
            setAds(true);
            timerId = setTimeout(() => {
                setAds(false);
            }, 10000);
        }, 3000);
    };
    const endAds = () => {
        setAds(false);
    };
    return (
        <div className={videoStyle.video}>
            <video
                controls
                onPlay={playAds}
                src={vid}
                onEnded={endAds}
                width={"100%"}
                ref={videoPlayer}
            >
                {/* <source src={vid} type="video/mp4" /> */}
            </video>
            {viewBackground ? (
                <div className={videoStyle.blur}>
                    <Button
                        type="secondBtn"
                        onClick={() => {
                            playAds();
                            setViewBackground(false);
                        }}
                    >
                        play
                    </Button>
                </div>
            ) : null}
            {ads && <Overlay setAds={setAds} endAds={endAds} />}
        </div>
    );
};

export default Video;
