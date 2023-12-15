import styles from "@/styles/BookButton.module.css";

function BookButton() {
  const redirectToLinkedInProfile = () => {
    window.location.href =
      "https://www.linkedin.com/in/alexander-mattingley-244304271/";
  };

  return (
    <div className={styles.bookButtonMenu} onClick={redirectToLinkedInProfile}>
      BOOK NOW
    </div>
  );
}

export default BookButton;
