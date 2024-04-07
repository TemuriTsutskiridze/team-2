/* eslint-disable*/
import styles from "./RoadBoard.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FeedbackContext } from "../../../../store/feedback-context";
export default function () {
  const { getFeedbacksByName } = useContext(FeedbackContext);
  const planned = getFeedbacksByName("planned").length;
  const progress = getFeedbacksByName("in-progress").length;
  const live = getFeedbacksByName("live").length;

  return (
    <div className={`${styles.roadBoard} md:mb-0`}>
      <h1 className={styles.roadTitle}>
        Roadmap
        <Link to={`${planned && progress && live !== 0 ? `/roadmap` : ''}`} className={styles.view}>
          view
        </Link>
      </h1>
      <div className={styles.roadMap}>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#f49f85]" />
          <div className={styles.statusContainer}>
            <p className={styles.planned}>Planned</p>
            <span className={styles.roadNums}>{planned}</span>
          </div>
        </div>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#ad1fea]" />
          <div className={styles.statusContainer}>
            <p className={styles.InProgress}>In-Progress</p>
            <span className={styles.roadNums}>{progress}</span>
          </div>
        </div>
        <div className={styles.roadSpans}>
          <div className="w-2 h-2 rounded-full bg-[#63bcfa]"></div>
          <div className={styles.statusContainer}>
            <p className={styles.Live}>Live</p>
            <span className={styles.roadNums}>{live}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
