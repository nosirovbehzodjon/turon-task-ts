
type Props = {
    setAds: (bool: boolean) => void;
    endAds: () => void;
};
import vid from "@/src/assets/videos/vid.mp4";
function Overlay({ setAds, endAds }: Props) {
    return (
        <div>
            <video
                controls={false}
                autoPlay
                muted
                onEnded={endAds}
                width={"100%"}
            >
                <source src={vid} type="video/mp4" />
            </video>
            <div>
                <div>
                    <p>Make up to 20% profit when you invest with us</p>
                    <a
                        href="https://hackmamba.io/"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        Get Started
                    </a>
                </div>
                <div>
                    <button onClick={() => setAds(false)}>X</button>
                </div>
            </div>
        </div>
    );
}
export default Overlay;
