import BookButton from "@/components/BookButton.jsx";
import AwardsButton from "@/components/AwardsButton.jsx";

import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <div
      name="header-container-full-width"
      className={styles.headerContainerFullWidth}
    >
      <div
        name="header-container-content"
        className={styles.headerContainerContent}
      >
        <div name="menu-div" className={styles.menuDiv}>
          {/* <img
            name="menu-image"
            src="/Frame 5.jpg"
            alt="A descriptive text about the image"
            width="30vw"
            height="50vh"
            style={{ cursor: "pointer",}}
          ></img> */}
          <img
            name="menu-image"
            src="/Frame 5.jpg"
            alt="A descriptive text about the image"
            className={styles.menuImage}
          ></img>
        </div>
        <div
          name="logo-div"
          style={{
            display: "flex",
          }}
        >
          {/* <img
            name="main-logo"
            src="static/plaslogo.jpg"
            alt="A descriptive text about the image"
            width="75vw"
            height="84vh"
            style={{ cursor: "pointer" }}
          /> */}
          <img
            name="main-logo"
            src="static/plaslogo.jpg"
            alt="A descriptive text about the image"
            className={styles.mainLogo}
          />
        </div>
        <div
          name="header-buttons-container"
          className={styles.headerButtonsContainer}
        >
          <BookButton />
          <AwardsButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
