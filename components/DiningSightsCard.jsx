function DiningSightsCard() {
  return (
    <div
      name="card-div-2-3"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "translucent",
        width: "66vw",
        height: "50vh",
        marginTop: "3vw",
      }}
    >
      <div
        name="card-container2"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          name="card-left-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "15.8vw",
            height: "50vh",
            backgroundColor: "translucent",
            color: "#48021e",
            backgroundColor: "translucent",
            borderTop: "1px solid #EAEAEA",
            borderBottom: "1px solid #EAEAEA",
            borderLeft: "1px solid #EAEAEA",
            padding: "2rem", // Add padding to all sides
            boxSizing: "border-box", // Include padding in the total width and height
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "EB Garamond, sans-serif",
            fontWeight: "400",
            letterSpacing: "0.2rem",
          }}
        >
          <p style={{ marginBottom: "0.5rem" }}>DINING OPTIONS</p>
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
              Mesmerizing breakfast views and an award winning local restaurant.
            </p>
          </div>
        </div>
        <div
          name="card-right-image"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "15.8vw",
            height: "50vh",
            backgroundColor: "translucent",
            cursor: "pointer",
          }}
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
        name="card-container3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "translucent",
        }}
      >
        <div
          name="card-left-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "15.8vw",
            height: "50vh",
            backgroundColor: "translucent",
            color: "#48021e",
            backgroundColor: "translucent",
            borderTop: "1px solid #EAEAEA",
            borderBottom: "1px solid #EAEAEA",
            borderLeft: "1px solid #EAEAEA",
            padding: "2rem", // Add padding to all sides
            boxSizing: "border-box", // Include padding in the total width and height
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "EB Garamond, sans-serif",
            fontWeight: "400",
            letterSpacing: "0.2rem",
          }}
        >
          <p style={{ marginBottom: "0.5rem" }}>SIGHTS & ATTRACTIONS</p>
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
              Ideally placed for all the attractions that North Wales has to
              offer.
            </p>
          </div>
        </div>
        <div
          name="card-right-image"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "15.8vw",
            height: "50vh",
            backgroundColor: "translucent",
            cursor: "pointer",
          }}
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
