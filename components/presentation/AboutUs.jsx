import Styles from "../../styles/AboutUs.module.css";
export default function AboutUs() {
    return (
        <div>
            <h1 className={Styles.header}>WHO ARE WE?</h1>
            <p className={Styles.p}>We are team Keyla4U. We provided A sport court booking system enables individuals and organizations to book sports facilities such as football, volleyball, and tennis courts. <br/>In Cambodia, where sports are an important part of everyday life, such a system would likely be useful and popular. </p>
            <center>
                <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="95%" height="800px" display="block" margin-left="auto" margin-right="auto"  />
            </center>
        </div>
    );
} 