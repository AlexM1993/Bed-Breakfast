import styles from "@/styles/HistoryCard.module.css";

function HistoryCard() {
  return (
    <div
      name="History-card-container"
      className={styles.historyCardContainer}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   marginTop: "6vh",
      // }}
    >
      <div
        name="History-card-left-image"
        className={styles.historyCardLeftImage}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   width: "45vw",
        //   height: "60vh",
        //   backgroundColor: "translucent",
        //   cursor: "pointer",
        // }}
      >
        <img
          src="images/plashistory.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div
        name="History-card-right-text-title"
        className={styles.historyCardRightTextTitle}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "21vw",
        //   height: "60vh",
        //   backgroundColor: "translucent",
        //   padding: "2rem", // Add padding to all sides
        //   boxSizing: "border-box", // Include padding in the total width and height
        //   color: "#48021e",
        //   fontSize: "2rem",
        //   textAlign: "center",
        //   fontFamily: "EB Garamond, sans-serif",
        //   fontWeight: "400",
        //   letterSpacing: "0.2rem",
        //   backgroundColor: "rgb(234, 234, 234)",
        // }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          THE HISTORY BEHIND HILLTOP MANOR
        </p>
        <div
          name="History-card-right-text-content"
          className={styles.historyCardRightTextContent}
          // style={{
          //   display: "flex",
          //   fontSize: "1.1rem",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   textAlign: "center",
          //   fontFamily: "EB Garamond, sans-serif",
          //   letterSpacing: "0.05rem",
          //   fontWeight: "400",
          // }}
        >
          <p>
            Built in the early 1800s, Hilltop Manor has a deep historical
            connection to North Wales. You too can create your history here at
            Hilltop Manor.
          </p>
        </div>
        <div
          name="history-card-right-text-button"
          className={styles.historyCardRightTextButton}
          // style={{
          //   display: "flex",
          //   height: "fit-content",
          //   width: "fit-content",
          //   fontSize: ".8rem",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   textAlign: "center",
          //   fontFamily: "EB Garamond, sans-serif",
          //   lineHeight: "0",
          //   letterSpacing: "0.1rem",
          //   fontWeight: "700",
          //   cursor: "pointer",
          //   borderBottom: "1px solid #48021e",
          // }}
        >
          <p>HILLTOP HISTORY</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
