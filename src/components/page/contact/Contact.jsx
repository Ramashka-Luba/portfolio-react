import Input from "../../common/input/Input";
import TitleH2 from "../../common/titleH2/TitleH2";
import Button from "../../common/button/Button";
import s from "./Contact.module.scss";

const Contact = () => {
    return (
        <section className={s.contact} id="contact">
            <div className={s.wrapper}>
                <div className={s.rightBlog}>
                    <div className={s.content}>
                        <TitleH2 value="Get In Touch" />
                        <form action="" className={s.form}>
                            <Input label="Name"
                                type="name"
                                name="name"
                            />
                            <Input label="Email"
                                type="email"
                                name="email"
                            />
                            <Input label="Phone"
                                type="phone"
                                name="phone"
                            />
                            <label>
                                <span className={s.label}>Message</span>
                                <textarea className={s.textarea}
                                    type="phone"
                                    name="comment">
                                </textarea>
                            </label>
                            <Button value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
                <div className={s.leftBlog}>
                    <div className={s.title}>
                        CONTACT
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;