import classes from "../styles/Videos.module.css";
import Video from "./Video.jsx";

const contents = [
    {
        title: '#1 Brain distrubing - Dare to watch.',
        numberOfViews: 10,
        rating: 'Not taken yet'
    },
    {
        title: '#2 Brain distrubing - Dare to watch.',
        numberOfViews: 10,
        rating: 'Not taken yet'
    },
    {
        title: '#3 Brain distrubing - Dare to watch.',
        numberOfViews: 10,
        rating: 'Not taken yet'
    },
    {
        title: '#4 Brain distrubing - Dare to watch.',
        numberOfViews: 10,
        rating: '8/10'
    },
];

export default function Videos() {
    return(
        <div>
            <Video />
            {/* {contents.map((content) => (
                        <Video
                        key={content.title}
                        title={content.title}
                        numberOfViews={content.numberOfViews}
                        rating={content.rating}
                        />
          ))} */}
        </div>
        
    );
}