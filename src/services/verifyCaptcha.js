"use server";

import axios from "axios";

const verifyCaptcha = async (token) => {
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );
    if (res.data.success) {
        return "Captcha is verified!";
    } else {
        throw new Error("Failed Captcha");
    }
};

export default verifyCaptcha;
