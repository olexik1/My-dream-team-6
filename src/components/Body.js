import React from "react"; 



const Body = () => {
  return (
    <main style={styles.body}>
          <div style={styles.card}>
              <img src={"/Murzik.png"} alt="Barsik" style={styles.photo} />
              <div style={styles.textContainer}>
                  <h2 style={styles.name}>Barsik</h2>
                  <p style={styles.position}>Team Lead(test234)</p>
              </div>
          </div>
      <div style={styles.card}>
        <img src={"/NanaPic.jpg"} alt="Mariana Kushnir" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariana Kushnir</h2>
          <p style={styles.position}>Software engineer</p>
       </div>
       </div>
       <div style={styles.card}>
        <img src={"/avatar.png"} alt="Nazarii Kukiz" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Nazarii Kukiz</h2>
          <p style={styles.position}>Student</p>
        </div>
        </div>
        <div style={styles.card}>
        <img src={"/Michael_kaiser.jpg"} alt="Oleh Ozhinskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Oleh Ozhinskyi (vibecoder)</h2>
          <p style={styles.position}>Great German vibecoder</p>
        </div>
        </div>
        <div style={styles.card}>
        <img src={"/SitePhoto.png"} alt="Nahirnyi Vitalii" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Nahirnyi Vitalii</h2>
          <p style={styles.position}>Student at Lviv Polytechnic</p>
        </div>
        </div>
        <div style={styles.card}>
        <img src={"/SitePhoto.png"} alt="Napoleon Bonaparte" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Napoleon Bonaparte</h2>
          <p style={styles.position}>French emperror</p>
        </div>
        </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;

