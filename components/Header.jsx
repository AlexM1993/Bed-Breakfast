import BookButton from "@/components/BookButton.jsx";
import AwardsButton from "@/components/AwardsButton.jsx";

function Header() {
  return (
    <div
      name="header-container"
      style={{
        display: "flex",
        margin: "0 auto",
        position: "fixed",
        flex: 1,
        alignItems: "center",
        width: "66vw",
        height: "9.5vh",
        backgroundColor: "white",
      }}
    >
      <div
        name="menu-div"
        style={{
          display: "flex",
          flex: "1",
          backgroundColor: "translucent",
          maxWidth: "34.4vw",
        }}
      >
        <img
          name="menu-image"
          src="/Frame 5.jpg"
          alt="A descriptive text about the image"
          width="30vw"
          height="50vh"
          style={{ cursor: "pointer" }}
        ></img>
      </div>
      <div
        name="logo-div"
        style={{
          display: "flex",
        }}
      >
        <img
          name="main-logo"
          src="images/plaslogo.jpg"
          alt="A descriptive text about the image"
          width="75vw"
          height="84vh"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        name="header-buttons-container"
        style={{
          display: "flex",
          flex: "1",
          justifyContent: "flex-end",
          backgroundColor: "translucent",
          maxWidth: "34.4vw",
        }}
      >
        <BookButton />
        <AwardsButton />
      </div>
    </div>
  );
}

export default Header;
