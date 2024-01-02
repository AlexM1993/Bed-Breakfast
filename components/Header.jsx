import BookButton from "@/components/BookButton.jsx";
import AwardsButton from "@/components/AwardsButton.jsx";

import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <div
      name="header-container-full-width"
      className={styles.headerContainerFullWidth}
      // style={{
      //   margin: "0 auto",
      //   flex: 1,
      //   position: "fixed",
      //   alignItems: "center",
      //   backgroundColor: "white",
      //   width: "99.1vw",
      //   minHeight: "9.5vh",
      //   zIndex: "2",
      // }}
    >
      <div
        name="header-container-content"
        className={styles.headerContainerContent}
        // style={{
        //   display: "flex",
        //   margin: "0 auto",
        //   flex: 1,
        //   alignItems: "center",
        //   width: "66vw",
        //   minHeight: "9.5vh",
        //   backgroundColor: "white",
        // }}
      >
        <div
          name="menu-div"
          className={styles.menuDiv}
          // style={{
          //   display: "flex",
          //   flex: "1",
          //   backgroundColor: "translucent",
          //   maxWidth: "34.4vw",
          // }}
        >
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
            // style={{ cursor: "pointer", width: "35px", height: "40px" }}
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
            src="images/plaslogo.jpg"
            alt="A descriptive text about the image"
            width="75vw"
            height="84vh"
            style={{ cursor: "pointer" }}
          /> */}
          <img
            name="main-logo"
            src="images/plaslogo.jpg"
            alt="A descriptive text about the image"
            className={styles.mainLogo}
            // style={{ cursor: "pointer", width: "75px", height: "85px" }}
          />
        </div>
        <div
          name="header-buttons-container"
          className={styles.headerButtonsContainer}
          // style={{
          //   display: "flex",
          //   flex: "1",
          //   justifyContent: "flex-end",
          //   backgroundColor: "translucent",
          //   maxWidth: "34.4vw",
          // }}
        >
          <BookButton />
          <AwardsButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
