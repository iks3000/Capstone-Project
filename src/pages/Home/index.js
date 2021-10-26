import PhotoBox from '../../components/PhotoBox';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import UserAvatar from '../../assets/images/users/UserAvatar.png';
import './style.scss';

const Home = () => {
    return (
        <section className="home">
            <PhotoBox
                avatar={UserAvatar}
                name={'John Doe'}
                title={'Programmer. Creative. Innovator'}
                description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.'}
            />
            <Link to='/inner'>
                <Button text={'Know more'} />
            </Link>
        </section>
    )
}

export default Home;