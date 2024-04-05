// Import necessary React features and assets

import {Link, useNavigate} from "react-router-dom"; // Import Link component for navigation
import arrowLeftIcon from "/assets/shared/icon-arrow-left.svg"; // Left arrow icon for navigation
import plusIcon from "/assets/shared/icon-new-feedback.svg"; // Plus icon for adding new feedback

import styles from "../styles/NewFeedBacks.module.css"; // Import CSS module for styling
import NewFeedBackForm from "../components/NewFeedbackForm/NewFeedBackForm";

/**
 * NewFeedback component allows users to create new feedback entries.
 */
function NewFeedback() {
  // For redirecting on previous page in which we was
  let navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* Navigation to go back to the main page */}

          <Link style={{cursor: "pointer"}} onClick={goBack} to="/">
            <img src={arrowLeftIcon} alt="left arrow" />
            Go back
          </Link>
        </header>

        <section className={styles.content}>
          {/* Section to add new feedback */}
          <img src={plusIcon} alt="plus icon" className={styles.plus} />
          <h2 className={styles.title}>Create New Feedback</h2>

          <NewFeedBackForm />
        </section>
      </div>
    </>
  );
}

export default NewFeedback;
