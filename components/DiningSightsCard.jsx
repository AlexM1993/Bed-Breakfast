import styles from "@/styles/DiningSightsCard.module.css";

function DiningSightsCard() {
  return (
    <div
      name="card-div-dining-and-sights"
      className={styles.cardDivDiningSights}
    >
      <div name="card-dining-container" className={styles.cardDiningContainer}>
        <div
          name="card-dining-left-text-title"
          className={styles.cardDiningLeftTextTitle}
        >
          <p style={{ marginBottom: "0.5rem" }}>DINING OPTIONS</p>
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
            src="images/plasdiningoptions.jpg"
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
          name="card-sights-left-text-title"
          className={styles.cardSightsLeftTextTitle}
        >
          <p style={{ marginBottom: "0.5rem" }}>SIGHTS & ATTRACTIONS</p>
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
            <p>HILLTOP ATTRACTIONS</p>
          </div>
        </div>
        <div
          name="card-sights-right-image-container"
          className={styles.cardSightsRightImageContainer}
        >
          <img
            src="images/plasattractions.jpg"
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
