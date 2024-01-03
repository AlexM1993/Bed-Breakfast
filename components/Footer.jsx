import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <div name="Footer-container" className={styles.footerContainer}>
      <div
        name="Footer-content-container"
        className={styles.footerContentContainer}
      >
        <div name="Text-footer-div" className={styles.textFooterDiv}>
          <p>HILLTOP MANOR, TREMADOG, PORTHMADOG LL49 9RG</p>
          <p>TELEPHONE: +44 (0) 1766 514 682</p>
          <p>© 2023 HILLTOP MANOR | ALL RIGHTS RESERVED | COOKIE POLICY</p>
        </div>
        {/* <div
            name="travellers-choice-div"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "translucent",
            }}
          >
            <img
              src="images/travellers-choice-21.png"
              style={{
                width: "auto",
                height: "60%",
              }}
            ></img>
          </div> */}
        <div name="socials-div" className={styles.socialsDiv}>
          <img
            src="images/Socials.png"
            style={{
              width: "9vw",
              height: "3vh",
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
