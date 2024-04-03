import React from "react";
import { CTA } from "../components"; // Assurez-vous que ce composant existe et est correctement importé.

const TechWatch = () => {
    return (
        <section className="max-container p-5">
            <h1 className="text-3xl font-bold text-center mb-6">
                Veille technologique : L'IA dans la programmation moderne
            </h1>

            {/* Introduction */}
            <div className="text-slate-600 mb-5">
                <p>
                    L'intelligence artificielle (IA) transforme rapidement le
                    domaine de la programmation. Des outils basés sur l'IA, tels
                    que les IDE améliorés et les assistants de codage, rendent
                    le développement logiciel plus efficace et plus accessible.
                    Découvrons comment ces innovations façonnent l'avenir de la
                    programmation.
                </p>
            </div>

            {/* Cursor - Google's IDE */}
            <div className="mb-5">
                <h2 className="text-2xl font-semibold mb-3">
                    Cursor - L'IDE de Google
                </h2>
                <p>
                    Cursor est un environnement de développement intégré (IDE)
                    révolutionnaire de Google, conçu pour améliorer la
                    productivité des développeurs grâce à l'intégration de l'IA.
                    Il propose des suggestions de code intelligentes, une
                    détection d'erreur améliorée et des analyses de code en
                    temps réel pour optimiser le processus de développement.
                </p>
            </div>

            {/* GitHub Copilot */}
            <div className="mb-5">
                <h2 className="text-2xl font-semibold mb-3">GitHub Copilot</h2>
                <p>
                    GitHub Copilot est un outil d'assistance au codage alimenté
                    par OpenAI, conçu pour aider les développeurs à écrire du
                    code plus rapidement et avec moins d'erreurs. Il suggère des
                    lignes de code et des fonctions entières en temps réel,
                    directement dans l'éditeur de code, en se basant sur le
                    contexte du code existant et les commentaires du
                    développeur.
                </p>
            </div>

            {/* Autres outils AI en programmation */}
            <div className="mb-5">
                <h2 className="text-2xl font-semibold mb-3">
                    Autres outils d'IA en programmation
                </h2>
                <p>
                    En plus de Cursor et GitHub Copilot, d'autres outils basés
                    sur l'IA comme Kite, Tabnine et IntelliCode de Microsoft
                    sont également en train de redéfinir la manière dont les
                    développeurs écrivent et maintiennent leur code. Ces outils
                    offrent une gamme variée de fonctionnalités, y compris la
                    complétion de code, la revue de code automatisée et les
                    suggestions de refactorisation.
                </p>
            </div>

            <CTA />
        </section>
    );
};

export default TechWatch;
