function Video() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
      <div
        name="video-container"
        style={{
          width: "99.1vw",
          height: "91vh",
          display: "flex",
          position: "absolute",
          backgroundColor: "translucent",
          marginTop: "9.5vh",
        }}
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          style={{ objectFit: "fill" }}
        >
          <source src="/Plas-header-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          name="video-title-container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 100%)",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "400",
            textAlign: "center",
            fontFamily: "EB Garamond",
            letterSpacing: "0.2rem",
          }}
        >
          <p>HILLTOP MANOR</p>
        </div>
        <div
          name="video-text-container"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 100%)",
            color: "#fff",
            fontWeight: "400",
            fontSize: "1.5rem",
            textAlign: "center",
            fontFamily: "EB Garamond",
          }}
        >
          <p>Award-Winning Historic Country House</p>
          <p>3 NIGHTS FOR 2 - OCT 2023 - MARCH 24</p>
          <p>BOOK DIRECT To Guarantee Our Lowest Prices Anywhere</p>
        </div>
      </div>
    </>
  );
}

export default Video;
