import styles from "@/styles/RoomsAndGrounds.module.css";

function RoomsAndGrounds() {
  return (
    <>
      <div
        name="Rooms and Grounds text container"
        className={styles.roomsAndGroundsTextContainer}
      >
        <p>OUR ROOMS & GROUNDS</p>
      </div>
      <div
        name="Rooms and Grounds grid container"
        className={styles.roomsAndGroundsGridContainer}
      >
        <div name="Shelley's-container" className={styles.shelleysContainer}>
          <div
            name="Shelley's-image-container"
            className={styles.shelleysImageContainer}
          >
            <img
              src="static/Plasshelleys.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Shelley's-text-container"
            className={styles.shelleysTextContainer}
          >
            <p>SHELLEY&apos;S THEATRE</p>
          </div>
        </div>
        <div name="Maddocks-container" className={styles.maddocksContainer}>
          <div
            name="Maddocks-image-container"
            className={styles.maddocksImageContainer}
          >
            <img
              src="static/Plasmaddocks.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Maddocks-text-container"
            className={styles.maddocksTextContainer}
          >
            <p>THE WILLIAM MADOCKS ROOM</p>
          </div>
        </div>
        <div name="Hildas-container" className={styles.hildasContainer}>
          <div
            name="Hildas-image-container"
            className={styles.hildasImageContainer}
          >
            <img
              src="static/Plashildas.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Hildas-text-container"
            className={styles.hildasTextContainer}
          >
            <p>MISS HILDA&apos;S</p>
          </div>
        </div>
        <div
          name="Drawing-room-container"
          className={styles.drawingRoomContainer}
        >
          <div
            name="Drawing-room-image-container"
            className={styles.drawingRoomImageContainer}
          >
            <img
              src="static/Plasdrawingroom.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Drawing-groom-text-container"
            className={styles.drawingRoomTextContainer}
          >
            <p>DRAWING ROOM</p>
          </div>
        </div>
        <div name="Diner-container" className={styles.dinerContainer}>
          <div
            name="Diner-image-container"
            className={styles.dinerImageContainer}
          >
            <img
              src="static/Plasdining.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Diner-text-container"
            className={styles.dinerTextContainer}
          >
            <p>BREAKFAST DINER</p>
          </div>
        </div>
        <div name="Grounds-container" className={styles.groundsContainer}>
          <div
            name="Grounds-image-container"
            className={styles.groundsImageContainer}
          >
            <img
              src="static/Plasgrounds.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            name="Grounds-text-container"
            className={styles.groundsTextContainer}
          >
            <p>GROUNDS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsAndGrounds;
