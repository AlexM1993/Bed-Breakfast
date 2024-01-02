import styles from "@/styles/DiningSightsCard.module.css";

function DiningSightsCard() {
  return (
    <div
      name="card-div-dining-and-sights"
      className={styles.cardDivDiningSights}
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   backgroundColor: "translucent",
      //   width: "66vw",
      //   height: "50vh",
      //   marginTop: "3vw",
      // }}
    >
      <div
        name="card-dining-container"
        className={styles.cardDiningContainer}
        // style={{
        //   display: "flex",

        //   justifyContent: "center",
        // }}
      >
        <div
          name="card-dining-left-text-title"
          className={styles.cardDiningLeftTextTitle}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   width: "15.8vw",
          //   height: "50vh",
          //   backgroundColor: "translucent",
          //   color: "#48021e",
          //   backgroundColor: "translucent",
          //   borderTop: "1px solid #EAEAEA",
          //   borderBottom: "1px solid #EAEAEA",
          //   borderLeft: "1px solid #EAEAEA",
          //   padding: "2rem", // Add padding to all sides
          //   boxSizing: "border-box", // Include padding in the total width and height
          //   fontSize: "2rem",
          //   textAlign: "center",
          //   fontFamily: "EB Garamond, sans-serif",
          //   fontWeight: "400",
          //   letterSpacing: "0.2rem",
          // }}
        >
          <p style={{ marginBottom: "0.5rem" }}>DINING OPTIONS</p>
          <div
            name="card-dining-left-text-content"
            className={styles.cardDiningLeftTextContent}
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
              Mesmerizing breakfast views and an award winning local restaurant.
            </p>
          </div>
          <div
            name="card-dining-left-text-button"
            className={styles.cardDiningLeftTextButton}
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
            <p>HILLTOP DINING</p>
          </div>
        </div>
        <div
          name="card-dining-right-image-container"
          className={styles.cardDiningRightImageContainer}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   width: "15.8vw",
          //   height: "50vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
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
      <div
        name="card-sights-container"
        className={styles.cardSightsContainer}
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   backgroundColor: "translucent",
        // }}
      >
        <div
          name="card-sights-left-text-title"
          className={styles.cardSightsLeftTextTitle}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   width: "15.8vw",
          //   height: "50vh",
          //   backgroundColor: "translucent",
          //   color: "#48021e",
          //   backgroundColor: "translucent",
          //   borderTop: "1px solid #EAEAEA",
          //   borderBottom: "1px solid #EAEAEA",
          //   borderLeft: "1px solid #EAEAEA",
          //   padding: "2rem",
          //   boxSizing: "border-box",
          //   fontSize: "2rem",
          //   textAlign: "center",
          //   fontFamily: "EB Garamond, sans-serif",
          //   fontWeight: "400",
          //   letterSpacing: "0.2rem",
          // }}
        >
          <p style={{ marginBottom: "0.5rem" }}>SIGHTS & ATTRACTIONS</p>
          <div
            name="card-sights-left-text-content"
            className={styles.cardSightsLeftTextContent}
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
              Ideally placed for all the attractions that North Wales has to
              offer.
            </p>
          </div>
          <div
            name="card-sights-left-text-button"
            className={styles.cardSightsLeftTextButton}
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
            <p>HILLTOP ATTRACTIONS</p>
          </div>
        </div>
        <div
          name="card-sights-right-image-container"
          className={styles.cardSightsRightImageContainer}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   width: "15.8vw",
          //   height: "50vh",
          //   backgroundColor: "translucent",
          //   cursor: "pointer",
          // }}
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
