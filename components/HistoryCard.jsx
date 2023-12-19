function HistoryCard() {
  return (
    <div
      name="History-card-container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6vh",
      }}
    >
      <div
        name="History-card-left-image"
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
          src="images/plashistory.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div
        name="History-card-right-text"
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
        <p style={{ marginBottom: "0.5rem" }}>
          THE HISTORY BEHIND HILLTOP MANOR
        </p>
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
            Built in the early 1800s, Hilltop Manor has a deep historical
            connection to North Wales. You too can create your history here at
            The Manor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
