import styles from "./Project.module.scss";

import { josefin } from "../../../lib/fonts";

interface Props {
    readonly projectName: string;
    readonly largeImgPath: string;
    readonly smallImgPath: string;
}

export const Project: React.FunctionComponent<Props> = ({
    projectName,
    largeImgPath,
    smallImgPath
}) => {
    const large = 1000;

    return (
        <div className={`${styles.project} ${josefin.className} `}>
            <picture>
                <source
                    srcSet={largeImgPath}
                    media={`(min-width:${large}px)`}
                />
                <img
                    src={smallImgPath}
                    alt={` an image of ${projectName} project`}
                />
            </picture>
            <p>{projectName}</p>
        </div>
    );
};
