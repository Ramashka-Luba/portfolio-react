import Input from "../../common/input/Input";
import TitleH2 from "../../common/titleH2/TitleH2";
import Button from "../../common/button/Button";
import s from "./Contact.module.scss";
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import {useFormik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
        },
        modes: {
            repulse: {
                distance: 200
            }
        },
        detect_on: "window"
    }


};

const Contact = () => {

    const [body, setBody] = useState({});
    const [fly, setFly] = useState(false);

    useEffect(() => {
        if (fly) {
            axios.post('https://server-for-luba.herokuapp.com/sendMessage', body)
                .then((res) => {
                    console.log('ok')
                })
        }
    }, [body])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        onSubmit: values => {
            setFly(true)
            setBody(values);
        },
    })

    return (
        <section className={s.contact} id="contact">
            <div className={s.wrapper}>
                <div className={s.leftBlog}>
                    <Particles className={s.particles} params={particlesOptions}/>
                    <div className={s.content}>
                        <TitleH2 value="Get In Touch"/>
                        <form action="" className={s.form} onSubmit={formik.handleSubmit}>
                            <Input label="Name"
                                   type="name"
                                   name="name"
                                   formik={formik}
                                   {...formik.getFieldProps('name')}
                            />
                            <Input label="Email"
                                   type="email"
                                   name="email"
                                   formik={formik}
                                   {...formik.getFieldProps('email')}
                            />
                            <Input label="Phone"
                                   type="phone"
                                   name="phone"
                                   formik={formik}
                                   {...formik.getFieldProps('phone')}
                            />
                            <label>
                                <span className={s.label}>Message</span>
                                <textarea className={s.textarea}
                                          type="phone"
                                          name="comment"
                                          {...formik.getFieldProps('message')}
                                >
                                </textarea>
                            </label>
                            <Button value="SEND MESSAGE"
                                    type={"submit"}
                            />
                        </form>
                    </div>
                </div>
                <div className={s.rightBlog}>
                    <span>CONTACT</span>
                    {/* <ReactTypingEffect text={["CONTACT"]}/> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;