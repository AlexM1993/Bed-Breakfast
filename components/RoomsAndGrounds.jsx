import styles from "@/styles/RoomsAndGrounds.module.css";

function RoomsAndGrounds() {
  return (
    <>
      <div
        name="Rooms and Grounds text container"
        className={styles.roomsAndGroundsTextContainer}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "66vw",
        //   height: "12vh",
        //   backgroundColor: "translucent",
        //   padding: "2rem", // Add padding to all sides
        //   boxSizing: "border-box", // Include padding in the total width and height
        //   color: "#48021e",
        //   fontSize: "1.5rem",
        //   textAlign: "center",
        //   fontFamily: "EB Garamond, sans-serif",
        //   fontWeight: "500",
        //   letterSpacing: "0.2rem",
        // }}
      >
        <p>OUR ROOMS & GROUNDS</p>
      </div>
      <div
        name="Rooms and Grounds grid container"
        className={styles.roomsAndGroundsGridContainer}
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   flexDirection: "row",
        //   justifyContent: "space-between",
        //   alignContent: "space-between",
        //   width: "66vw",
        //   height: "78vh",
        //   backgroundColor: "translucent",
        //   marginBottom: "12vh",
        // }}
      >
        <div
          name="Shelley's-container"
          className={styles.shelleysContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Shelley's-image-container"
            className={styles.shelleysImageContainer}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "translucent",
            // }}
          >
            <img
              src="images/plasshelleys.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box",
            //   fontFamily: "EB Garamond, sans-serif",
            //   letterSpacing: "0.05rem",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   color: "#48021e",
            // }}
          >
            <p>SHELLEYS' THEATRE</p>
          </div>
        </div>
        <div
          name="Maddocks-container"
          className={styles.maddocksContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Maddocks-image-container"
            className={styles.maddocksImageContainer}
            // style={{
            //   display: "flex",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "blue",
            // }}
          >
            <img
              src="images/plasmaddocks.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box",
            //   fontFamily: "EB Garamond, sans-serif",
            //   letterSpacing: "0.05rem",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   color: "#48021e",
            // }}
          >
            <p>THE WILLIAM MADOCKS ROOM</p>
          </div>
        </div>
        <div
          name="Hildas-container"
          className={styles.hildasContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Hildas-image-container"
            className={styles.hildasImageContainer}
            // style={{
            //   display: "flex",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "blue",
            // }}
          >
            <img
              src="images/plashildas.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box", // Include padding in the total width and height
            //   fontFamily: "EB Garamond, sans-serif",
            //   letterSpacing: "0.05rem",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   color: "#48021e",
            // }}
          >
            <p>MISS HILDA'S</p>
          </div>
        </div>
        <div
          name="Drawing-room-container"
          className={styles.drawingRoomContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Drawing-room-image-container"
            className={styles.drawingRoomImageContainer}
            // style={{
            //   display: "flex",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "blue",
            // }}
          >
            <img
              src="images/plasdrawingroom.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box",
            //   fontFamily: "EB Garamond, sans-serif",
            //   letterSpacing: "0.05rem",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   color: "#48021e",
            // }}
          >
            <p>DRAWING ROOM</p>
          </div>
        </div>
        <div
          name="Diner-container"
          className={styles.dinerContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Diner-image-container"
            className={styles.dinerImageContainer}
            // style={{
            //   display: "flex",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "blue",
            // }}
          >
            <img
              src="images/plasdining.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box",
            //   fontFamily: "EB Garamond, sans-serif",
            //   letterSpacing: "0.05rem",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   color: "#48021e",
            // }}
          >
            <p>BREAKFAST DINER</p>
          </div>
        </div>
        <div
          name="Grounds-container"
          className={styles.groundsContainer}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "21vw",
          //   height: "36vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
        >
          <div
            name="Grounds-image-container"
            className={styles.groundsImageContainer}
            // style={{
            //   display: "flex",
            //   width: "21vw",
            //   height: "28vh",
            //   backgroundColor: "blue",
            // }}
          >
            <img
              src="images/plasgrounds.jpg"
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
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   width: "21vw",
            //   height: "8vh",
            //   backgroundColor: "translucent",
            //   borderBottom: "1px solid #EAEAEA",
            //   borderLeft: "1px solid #EAEAEA",
            //   borderRight: "1px solid #EAEAEA",
            //   boxSizing: "border-box",
            //   fontFamily: "EB Garamond, sans-serif",
            //   fontSize: "1.1rem",
            //   fontWeight: "500",
            //   letterSpacing: "0.05rem",
            //   color: "#48021e",
            // }}
          >
            <p>GROUNDS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsAndGrounds;
