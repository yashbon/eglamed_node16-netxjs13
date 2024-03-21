import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Doctors from "@/components/Doctors/Doctors";
import Pricelist from "@/components/Pricelist/Pricelist";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import CallForm from "@/components/CallForm/CallForm";
import ButtonScrollUp from "@/components/ButtonScrollUp/ButtonScrollUp";
import styles from "./page.module.css";
import ButtonCallForm from "@/components/ButtonCallForm/ButtonCallForm";

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Hero />
                <Services />
                <Doctors />
                <About />
                <Pricelist />
                <CallForm />
                <ContactUs />
            </main>
            <ButtonCallForm />
            <ButtonScrollUp />
            <Footer />
        </>
    );
}
