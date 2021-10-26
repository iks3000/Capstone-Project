
import PhotoBox from '../PhotoBox';
import UserAvatar from '../../assets/images/users/UserAvatar.png';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Button from '../Button';
import './style.scss';

const Panel = () => {
    return (
        <div className="panel">
            <PhotoBox
                avatar={UserAvatar}
                name={'John Doe'}
            />
            <Navigation />
            <Link className="panel__go-home" to='/'>
                <Button
                    icon={<FontAwesomeIcon className="go-home-ico" icon={faChevronLeft} />}
                    text={'Go home'}/>
            </Link>
        </div>
    )
};

export default Panel;