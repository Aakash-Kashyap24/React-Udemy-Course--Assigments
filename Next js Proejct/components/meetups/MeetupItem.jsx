import { useRouter } from 'next/router';


import './meetupItem.css';
import Card from '../layout/card/Card';

function MeetupItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.id);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className="image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="content">
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className="actions">
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;