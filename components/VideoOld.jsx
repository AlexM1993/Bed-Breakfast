function Video() {
  return (
    <>
      <div
        name="video"
        style={{
          width: "99.1vw",
          height: "90vh",
          display: "flex",
          position: "absolute",
          backgroundColor: "translucent",
          marginTop: "13vh",
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
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -25%)",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "EB Garamond",
          }}
        >
          <p>PLAS TAN-YR-ALLT</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            color: "#fff",
            fontSize: "16px",
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
