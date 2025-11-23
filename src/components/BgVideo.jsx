const BackgroundVideoUrl = "https://res.cloudinary.com/dh4jjre2h/video/upload/v1763855891/background21_erab8v.mp4";

const BgVideo = () => {
    return (
        <div className="top-0 left-0 w-screen
         h-screen overflow-hidden -z-50 relative
          md:w-screen md:h-screen md:relative">
            <video
                autoPlay
                muted
                playsInline
                loop
                id="myVideo"
                src={BackgroundVideoUrl}
                type="video/mp4"
                alt="Background video for Home page"
                className='min-w-full min-h-full object-cover'
            >
            </video>
        </div>
    )
}

export default BgVideo;