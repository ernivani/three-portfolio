import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, competences } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
    const FrontendCompetences = competences.filter(
        (skill) => skill.type === "Frontend"
    );
    const BackendCompetences = competences.filter(
        (skill) => skill.type === "Backend"
    );
    const OtherCompetences = competences.filter(
        (skill) => skill.type === "Other"
    );

    return (
        <section className="max-container">
            <h1 className="head-text">
                Salut c'est{" "}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    {" "}
                    Thomas
                </span>{" "}
                👋
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Ingénieur logiciel basé en France, spécialisé dans la
                    création d'applications Web et mobiles.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">Mes compétences</h3>

                <h4 className="text-lg font-bold mt-8">Frontend</h4>
                <div className="mt-16 flex flex-wrap gap-12">
                    {FrontendCompetences.map((skill) => (
                        <div
                            className="block-container w-20 h-20"
                            key={skill.name}
                        >
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="my-8 border-slate-300" />

                <h4 className="text-lg font-bold">Backend</h4>
                <div className="mt-4 flex flex-wrap gap-12">
                    {BackendCompetences.map((skill) => (
                        <div
                            className="block-container w-20 h-20"
                            key={skill.name}
                        >
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="my-8 border-slate-300" />

                <h4 className="text-lg font-bold">Autres</h4>
                <div className="mt-4 flex flex-wrap gap-12">
                    {OtherCompetences.map((skill) => (
                        <div
                            className="block-container w-20 h-20"
                            key={skill.name}
                        >
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-16">
                <h3 className="subhead-text">Expérience professionnelle</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        J'ai travaillé des entreprises et acquis de nombreuses
                        compétences en cours de route.
                    </p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[60%] h-[60%] object-contain"
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p
                                        className="text-black-500 font-medium text-base"
                                        style={{ margin: 0 }}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className="text-black-500/50 font-normal pl-1 text-sm"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className="border-slate-200" />

            <CTA />
        </section>
    );
};

export default About;
