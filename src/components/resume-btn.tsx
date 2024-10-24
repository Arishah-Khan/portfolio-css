"use client";
import { useRouter } from 'next/navigation';
import { FC } from "react";
import "@/styles/resume-btn.css"

interface ResumeBtnProps {
    href: string;
    text: string;
}

const ResumeBtn: FC<ResumeBtnProps> = ({ href, text }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(href);
    };

    return (
        <div className="container">
            <button
                onClick={handleNavigation}
                className="resume_btn"
            >
                {text}
            </button>
        </div>
    );
};

export default ResumeBtn;
