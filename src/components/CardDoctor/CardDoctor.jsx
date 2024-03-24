"use client";

// import Image from "next/image";
import { useState } from "react";
import Button from "../../ui/Button/Button";
import css from "./CardDoctor.module.css";
import AboutDoctor from "../AboutDoctor/AboutDoctor";
import { motion, AnimatePresence } from "framer-motion";

const CardDoctor = ({ doctor }) => {
    const [showDocInfo, setShowDocIfo] = useState(false);

    function doctorInfo() {
        showDocInfo ? setShowDocIfo(false) : setShowDocIfo(true);
    }

    return (
        <div className={css.card}>
            <div className={css.cardImage}>
                <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className={css.cardImage}
                />
            </div>
            <div className={css.cardInfo}>
                <h3 className={css.cardTitle}>{doctor.name}</h3>
                <span className={css.cardSpecialty}>{doctor.specialty}</span>
            </div>

            <AnimatePresence initial={false}>
                {showDocInfo && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.4, 0.62, 0.23, 0.98],
                        }}
                    >
                        <AboutDoctor doctor={doctor} show={showDocInfo} />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={css.butWrapper}>
                <Button
                    type="button"
                    caption={!showDocInfo ? "Детальніше" : "Стисло"}
                    onClick={doctorInfo}
                />
            </div>
        </div>
    );
};

export default CardDoctor;
