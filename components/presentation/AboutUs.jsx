import Styles from "../../styles/AboutUs.module.css";

export default function AboutUs() {
    return (
        <div>
            <h1 className={Styles.header}>WHO ARE WE?</h1>
            <p className={Styles.p}>
                We are team Keyla4U. We provide a sport court booking system that enables individuals and organizations to book sports facilities such as football, volleyball, and tennis courts.
                <br />
                In Cambodia, where sports are an important part of everyday life, such a system would likely be useful and popular.
            </p>
            <div className={Styles.imageContainer}>
                <img
                    src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg"
                    alt=""
                    className={Styles.image}
                />
            </div>
        </div>
    );
}