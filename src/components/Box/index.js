import Info from '../../components/Info';
import './style.scss';

const Box = ({title, content }) => {
    return (
        <div className="info-box" id="boxComponent">
            <h2 className="info-box__title">{title}</h2>
            <Info text={content} />
        </div>
    );
};

export default Box;