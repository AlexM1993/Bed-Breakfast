function Footer() {
  return (
    <div
      name="Footer-container"
      style={{
        width: "99.1vw",
        height: "20vh",
        backgroundColor: "#48021e",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        name="Footer-content-container"
        style={{
          width: "66vw",
          height: "100%",
          backgroundColor: "translucent",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          name="Text-footer-div"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "translucent",
            width: "32vw",
            height: "20vh",
            color: "white",
            fontFamily: "EB Garamond",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: "500",
          }}
        >
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
        <div
          name="socials-div"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "translucent",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        >
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
