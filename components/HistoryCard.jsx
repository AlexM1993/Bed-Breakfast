import styles from "@/styles/HistoryCard.module.css";

function HistoryCard() {
  return (
    <div name="History-card-container" className={styles.historyCardContainer}>
      <div
        name="History-card-left-image"
        className={styles.historyCardLeftImage}
      >
        <img
          src="images/Plashistory.jpg"
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
      >
        <p style={{ marginBottom: "0.5rem" }}>
          THE HISTORY BEHIND HILLTOP MANOR
        </p>
        <div
          name="History-card-right-text-content"
          className={styles.historyCardRightTextContent}
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
        >
          <p>HILLTOP HISTORY</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
