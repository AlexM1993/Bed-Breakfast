import styles from "@/styles/DiningSightsCard.module.css";

function DiningSightsCard() {
  return (
    <div
      name="card-div-dining-and-sights"
      className={styles.cardDivDiningSights}
    >
      <div name="card-dining-container" className={styles.cardDiningContainer}>
        <div
          name="card-dining-text-container"
          className={styles.cardDiningTextContainer}
        >
          <div
            name="card-dining-left-text-title"
            className={styles.cardDiningLeftTextTitle}
          >
            <p style={{ marginBottom: "0.5rem" }}>DINING OPTIONS</p>
          </div>
          <div
            name="card-dining-left-text-content"
            className={styles.cardDiningLeftTextContent}
          >
            <p>
              Mesmerizing breakfast views and an award winning local restaurant.
            </p>
          </div>
          <div
            name="card-dining-left-text-button"
            className={styles.cardDiningLeftTextButton}
          >
            <p>HILLTOP DINING</p>
          </div>
        </div>
        <div
          name="card-dining-right-image-container"
          className={styles.cardDiningRightImageContainer}
        >
          <img
            src="static/Plasdiningoptions.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </div>
      </div>
      <div name="card-sights-container" className={styles.cardSightsContainer}>
        <div
          name="card-sights-text-container"
          className={styles.cardSightsTextContainer}
        >
          <div
            name="card-sights-left-text-title"
            className={styles.cardSightsLeftTextTitle}
          >
            <p style={{ marginBottom: "0.5rem" }}>SIGHTS & LOCALITIES</p>
          </div>
          <div
            name="card-sights-left-text-content"
            className={styles.cardSightsLeftTextContent}
          >
            <p>
              Ideally placed for all the attractions that North Wales has to
              offer.
            </p>
          </div>
          <div
            name="card-sights-left-text-button"
            className={styles.cardSightsLeftTextButton}
          >
            <p>HILLTOP SIGHTS</p>
          </div>
        </div>
        <div
          name="card-sights-right-image-container"
          className={styles.cardSightsRightImageContainer}
        >
          <img
            src="static/Plasattractions.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default DiningSightsCard;
