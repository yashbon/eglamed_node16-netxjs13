"use client";

import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import fadeImages from "@/data/images.json";
import css from "@/components/Slideshow/Slideshow.module.css";
import Indicators from "@/ui/Indicators/Indicators";

const Slideshow = () => {
    const buttonStyle = {
        width: "30px",
        background: "none",
        border: "0px",
    };
    const properties = {
        prevArrow: (
            <button style={{ ...buttonStyle }}>
                <svg viewBox="0 0 512 512" fill="var(--accent-color)">
                    <use href="./icons/symbol-defs.svg#icon-arrow_back_ios"></use>
                </svg>
            </button>
        ),
        nextArrow: (
            <button style={{ ...buttonStyle }}>
                <svg viewBox="0 0 512 512" fill="var(--accent-color)">
                    <use href="./icons/symbol-defs.svg#icon-arrow_forward_ios"></use>
                </svg>
            </button>
        ),
        duration: 3000,
        pauseOnHover: true,
        canSwipe: true,
        autoplay: true,
    };
    return (
        <div className="slide-container">
            <Fade indicators={Indicators} {...properties}>
                {fadeImages.map((fadeImage, index) => (
                    <div className={css.eachSlide} key={index}>
                        <div>
                            <img src={fadeImage.src} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Slideshow;
