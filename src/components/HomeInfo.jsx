import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                Salut, je suis
                <span className="font-semibold mx-2 text-white">Thomas</span>
                👋
                <br />
                Un développeur fullStack
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    J'ai travaillé avec de nombreuses entreprises
                    <br />
                    et acquis de nombreuses compétences en cours de route
                </p>

                <Link to="/about" className="neo-brutalism-white neo-btn">
                    En savoir plus
                    <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                    />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className="info-box">
                <p className="font-medium text-center sm:text-xl">
                    J'ai travaillé sur de nombreux projets
                    <br /> et j'ai hâte de vous les montrer
                </p>

                <Link to="/projects" className="neo-brutalism-white neo-btn">
                    Visitez mon portfolio
                    <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                    />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className="info-box">
                <p className="font-medium sm:text-xl text-center">
                    Besoin d'un projet réalisé ou d'un développeur ?
                    <br /> Je suis disponible pour des projets à court et à long
                    terme
                </p>

                <Link to="/contact" className="neo-brutalism-white neo-btn">
                    Parlons-en
                    <img
                        src={arrow}
                        alt="arrow"
                        className="w-4 h-4 object-contain"
                    />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
