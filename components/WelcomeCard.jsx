function WelcomeCard() {
  return (
    <div
      name="Welcome-card-container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5vw",
      }}
    >
      <div
        name="Welcome-card-left-text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "21vw",
          height: "60vh",
          backgroundColor: "translucent",
          padding: "2rem", // Add padding to all sides
          boxSizing: "border-box", // Include padding in the total width and height
          color: "#48021e",
          fontSize: "2rem",
          textAlign: "center",
          fontFamily: "EB Garamond, sans-serif",
          fontWeight: "400",
          letterSpacing: "0.2rem",
          backgroundColor: "rgb(234, 234, 234)",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>WELCOME TO THE MANOR</p>
        <div
          style={{
            display: "flex",
            fontSize: "1.1rem",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "EB Garamond, sans-serif",
            letterSpacing: "0.05rem",
            fontWeight: "400",
          }}
        >
          <p>
            Multi-Award-Winning Five Star Historic Country House & Estate.
            Crammed full of historical charm, sprinkled in literary mystique and
            bursting with 'la dolce vita' - The first Georgian built Italian
            style villa in North Wales.
          </p>
        </div>
      </div>
      <div
        name="Welcome-card-right-image"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "45vw",
          height: "60vh",
          backgroundColor: "translucent",
          cursor: "pointer",
        }}
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
