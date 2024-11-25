"use client";
import { useState } from "react";
import {
    SiCsharp,
    SiJavascript,
    SiPython,
    SiDotnet,
    SiReact,
    SiNextdotjs,
    SiVercel,
    SiSelenium,
    SiFlask,
    SiTensorflow,
    SiExpress,
    SiAwsamplify,
    SiAwslambda,
    SiAmazondynamodb,
    SiGraphql,
    SiMysql,
    SiAmazoncognito,
    SiAmazonapigateway,
    SiAmazons3,
    SiAuth0,
    SiShopify,
    SiWebflow
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { RiExternalLinkFill } from "react-icons/ri";
import Link from "next/link";


type Project = {
    _id: string;
    title: string;
    startDate: string;
    finishDate?: string;
    techStack: string[];
    description: string;
    shortDescription: string;
    image?: string;
    link?: string;
    logoHorizontal?: boolean;
};

export default function DevProjectCard({ project }: { project: Project }) {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const handleToggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    const techStackIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
        "C#": SiCsharp,
        "JavaScript": SiJavascript,
        "Python": SiPython,
        ".NET": SiDotnet,
        "React": SiReact,
        "React.js": SiReact,
        "React Native": SiReact,
        "Next.js": SiNextdotjs,
        "Vercel": SiVercel,
        "Selenium": SiSelenium,
        "TensorFlow": SiTensorflow,
        "Express": SiExpress,
        "AWS": FaAws,
        "Amplify": SiAwsamplify,
        "Lambda": SiAwslambda,
        "DynamoDB": SiAmazondynamodb,
        "GraphQL": SiGraphql,
        "MySQL": SiMysql,
        "Cognito": SiAmazoncognito,
        "API Gateway": SiAmazonapigateway,
        "S3": SiAmazons3,
        "OAuth2.0": SiAuth0,
        "Shopify": SiShopify,
        "Webflow": SiWebflow,
        "Socket.io": TbBrandSocketIo,
        "Flask": SiFlask,
    };

    const imagesFolder: string = "/images/projects/";
    const imagePath = project.image ? `${imagesFolder}${project.image}` : `https://picsum.photos/seed/${project._id}/200`;

    return (
        <div
            className="relative p-6 pb-4 bg-white bg-opacity-5 rounded-lg shadow-md space-y-3 hover:shadow-lg transition-shadow duration-300 cursor-pointer font-sans group"
            onClick={handleToggleDescription}>
                
            <div className="flex flex-row items-center">
                {/* <img
                    src={imagePath}
                    alt={project.title}
                    className="w-16 h-8 object-scale-down rounded-lg mr-4"
                /> */}
                <h1 className="text-2xl font-semibold text-white">{project.title}</h1>
                <img
                    src={imagePath}
                    alt={project.title}
                    className={`${project.logoHorizontal?"w-16":"w-8"} h-8 object-scale-down rounded-lg mx-4 self-end`}
                />
                {
                    project.link &&
                        <Link href={project?.link} target="_blank">
                            {/* <RiExternalLinkFill className="absolute top-3 right-3 text-xl text-primary transition-transform duration-300 hover:text-secondary" /> */}
                            <RiExternalLinkFill className="text-xl text-primary transition-transform duration-300 hover:text-secondary" />
                        </Link>    
                }

                

                <div className="flex flex-col">

                    {/* <p className="text-sm text-gray-200">
                        {new Date(project.startDate).toLocaleDateString()} -{" "}
                        {project.finishDate
                        ? new Date(project.finishDate).toLocaleDateString()
                        : "Present"}
                    </p> */}
                </div>
            </div>

            <div className="flex flex-row justify-start items-center">
                <h2 className="text-lg text-gray-200 mr-4">
                    {project.shortDescription}
                </h2>
                
                
                <GoPlus
                        className={`text-2xl text-primary top-3 right-3 transition-transform duration-300 group-hover:text-secondary ${isDescriptionVisible ? 'rotate-45' : ''}`}
                    />

            </div>


            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isDescriptionVisible ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="text-gray-200">{project.description}</p>
            </div>
            <div className="text-sm text-gray-500 mt-2">
                <div className="flex flex-wrap items-center justify-around mt-2">
                    {project.techStack.map((tech) => {
                        const Icon = techStackIcons[tech];
                        return Icon ? (
                            <div className="px-2 py-2 mx-2 flex flex-col items-center gap-2" key={tech}>
                                <Icon
                                    className="text-2xl text-primary mx-2"
                                />
                                <p className="text-sm text-white">{tech}</p>
                            </div>

                        ) : (
                            <span
                                key={tech}
                                className="text-sm text-white border border-gray-300 rounded px-2 py-1 mx-2"
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}