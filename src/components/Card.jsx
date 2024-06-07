import img from "../assets/WHAT.png";

function Card({ title, description }) {
    return (
        <div className="card w-full h-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">{title}</h2>
                <p className="text-primary">{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Open Repo</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
