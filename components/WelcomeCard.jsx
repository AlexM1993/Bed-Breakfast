import styles from "@/styles/WelcomeCard.module.css";

function WelcomeCard() {
  return (
    <div name="Welcome-card-container" className={styles.welcomeCardContainer}>
      <div
        name="Welcome-card-left-text-title"
        className={styles.welcomeCardLeftTextTitle}
      >
        <p style={{ marginBottom: "0.5rem" }}>WELCOME TO THE MANOR</p>
        <div
          name="Welcome-card-left-text-content"
          className={styles.welcomeCardLeftTextContent}
        >
          <p>
            Multi-Award-Winning Five Star Historic Country House & Estate.
            Crammed full of historical charm, sprinkled in literary mystique and
            bursting with &apos;la dolce vita&apos; - The first Georgian built
            Italian style villa in North Wales.
          </p>
          <div
            name="welcome-card-left-text-button"
            className={styles.welcomeCardLeftTextButton}
          >
            <p>READ OUR WELCOME</p>
          </div>
        </div>
      </div>
      <div
        name="Welcome-card-right-image-container"
        className={styles.welcomeCardRightImageContainer}
      >
        <img
          src="images/plasoutside.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
    </div>
  );
}

export default WelcomeCard;
