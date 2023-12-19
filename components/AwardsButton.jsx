import styles from "@/styles/AwardsButton.module.css";

function AwardsButton() {
  const redirectToAwards = () => {
    window.location.href = "http://localhost:3000/awards";
  };

  return (
    <div className={styles.awardsButtonMenu} onClick={redirectToAwards}>
      AWARDS
    </div>
  );
}

export default AwardsButton;
