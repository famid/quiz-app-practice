import image from "../assets/images/4.webp";
import classes from "../styles/Video.module.css";

export default function Video({title, numberOfViews, rating}){
    return (
        <a href="quiz.html">
            <div className={classes.video}>
              <img src={image} alt="video" />
              <p>{title ?? '#23 Brain distrubing - Dare to watch.'}</p>
              <div className={classes.qmeta}>
                <p>{numberOfViews} Views</p>
                <p>Rating : {rating ?? 'Not taken yet'}</p>
              </div>
            </div>
        </a>
    );
}