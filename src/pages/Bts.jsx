import React from "react";
import { CTA } from "../components";
import "react-vertical-timeline-component/style.min.css";

const Bts = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Découvrez les spécialisations du{" "}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    BTS SIO
                </span>{" "}
                👨‍💻
            </h1>

            {/* SLAM section */}
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <h2 className="text-lg font-semibold">
                    SLAM - Solutions Logicielles et Applications Métiers
                </h2>
                <p>
                    Le BTS SIO SLAM est conçu pour ceux qui visent à devenir des
                    experts en développement logiciel. Il couvre des compétences
                    en frontend et backend, ainsi que dans d'autres domaines
                    informatiques essentiels.
                </p>
            </div>

            {/* SISR section */}
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <h2 className="text-lg font-semibold">
                    SISR - Solutions d’Infrastructure, Systèmes et Réseaux
                </h2>
                <p>
                    Le BTS SIO SISR est destiné à ceux qui souhaitent se
                    spécialiser dans la gestion et la mise en place
                    d'infrastructures réseau et de systèmes informatiques au
                    sein des organisations.
                </p>
            </div>

            <hr className="border-slate-200" />
            <CTA />
        </section>
    );
};

export default Bts;
