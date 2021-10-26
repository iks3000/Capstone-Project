import './style.scss';
import PhoneIcon from '../../assets/images/icons/phone.svg';
import EmailIcon from '../../assets/images/icons/email.svg';
import TwitterIcon from '../../assets/images/icons/twitter.svg';
import FacebookIcon from '../../assets/images/icons/facebook.svg';
import SkypeIcon from '../../assets/images/icons/skype.svg';

const Address = () => {
    return (
        <div className="address" id="addressComponent">
            <h2 className="address__title">Contacts</h2>
            <div className="address__list">
                <div className="address__item">
                    <div className="img-wrapper">
                        <img src={PhoneIcon} alt="phone icon" />
                    </div>
                    <a className="content-title" href="tel:+1500-342-242">500 342 242</a>
                </div>
                <div className="address__item">
                    <div className="img-wrapper">
                        <img src={EmailIcon} alt="email icon" />
                    </div>
                    <a className="content-title" href="mailto:office@kamsolutions.pl">office@kamsolutions.pl</a>
                </div>
                <div className="address__item">
                    <div className="img-wrapper">
                        <img src={TwitterIcon} alt="twitter icon" />
                    </div>
                    <div>
                        <h3 className="content-title">Twitter</h3>
                        <a className="content-link" href="https://twitter.com/wordpress" target="_blank" rel="noreferrer" >https://twitter.com/wordpress</a>
                    </div>
                </div>
                <div className="address__item">
                    <div className="img-wrapper">
                        <img src={FacebookIcon} alt="facebook icon" />
                    </div>
                    <div>
                        <h3 className="content-title">Facebook</h3>
                        <a className="content-link" href="https://www.facebook.com/facebook" target="_blank" rel="noreferrer" >https://www.facebook.com/facebook</a>
                    </div>
                </div>
                <div className="address__item">
                    <div className="img-wrapper">
                        <img src={SkypeIcon} alt="skype icon" />
                    </div>
                    <div>
                        <h3 className="content-title">Skype</h3>
                        <a className="content-link" href="callto:kamsolutions.pl">kamsolutions.pl</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Address;