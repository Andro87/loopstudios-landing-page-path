import styles from "./Creations.module.scss";

import { josefin } from "../../../lib/fonts";

import Link from "next/link";

import { projects } from "@/data/projects";

import { Project } from "../Project/Project";

export const Creations = () => {
    return (
        <section
            className={styles.section_creations}
            aria-label="an collection of projects"
        >
            <h2 className={josefin.className}>Our creations</h2>

            <div className={styles.creations_container}>
                {projects.map(project => {
                    return (
                        <a
                            href="/"
                            aria-label={`a link to project ${project.name}`}
                            key={project.id}
                        >
                            <Project
                                largeImgPath={project.largeImg}
                                smallImgPath={project.smallImg}
                                projectName={project.name}
                            />
                        </a>
                    );
                })}
            </div>

            <Link
                href="/"
                className={styles.show_btn}
                aria-label="show all creations"
            >
                see all
            </Link>
        </section>
    );
};
