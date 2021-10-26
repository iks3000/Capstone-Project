import "./style.scss";

const PhotoBox = ({ name, title, description, avatar }) => {
    return (
        <figure>
            <div className="crop-photo">
                <img src={avatar} alt="User Avatar." />
            </div>
            <figcaption>
                <strong>{name}</strong>
                <article>
                    <header className="title">{title}</header>
                    <div className="description">{description}</div>
                </article>
            </figcaption>
        </figure>
    )
}

export default PhotoBox;
