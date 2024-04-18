import { EpisodeType } from "@/src/services/courseService";
import styles from "./styles.module.scss";

interface props {
    episode: EpisodeType;
}

const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;

    return result;
  };

const EpisodeList = function ({episode}: props){
    return <>
   <div className={styles.episodeCard}>
	  <div className={styles.episodeOrderTime}>
	    <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
      <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
    </div>
    <div className={styles.episodeTitleDescription}>
	    <p className={styles.episodeTitle}>{episode.name}</p>
      <p className={styles.episodeDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis laborum consequatur quam, quas recusandae esse voluptatum tenetur veritatis ad odit totam. Accusantium minus quos architecto quisquam odio quod enim? Nesciunt doloribus ipsum, obcaecati corrupti, corporis laudantium non eaque enim nobis aut beatae natus necessitatibus quisquam voluptate a maxime at.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, enim?</p>

    </div>
  </div>
    </>;
};

export default EpisodeList;