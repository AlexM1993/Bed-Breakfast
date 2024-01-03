import styles from "@/styles/Video.module.css";

function Video() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
      <div name="video-container" className={styles.videoContainer}>
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
          className={styles.videoTitleContainer}
        >
          <p>HILLTOP MANOR</p>
        </div>
        <div name="video-text-container" className={styles.videoTextContainer}>
          <p>Award-Winning Historic Country House</p>
          <p>3 NIGHTS FOR 2 - OCT 2023 - MARCH 24</p>
          <p>BOOK DIRECT To Guarantee Our Lowest Prices Anywhere</p>
        </div>
      </div>
    </>
  );
}

export default Video;
