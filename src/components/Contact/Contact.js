import { useState, useEffect, useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import emailjs from "@emailjs/browser";
import Form from "./Form/Form";
import { formValidation } from "../../helpers/formValidation";
import contactIcon from "../../assets/icons/contact.svg";
import "./Contact.css";

const initialValues = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { contactSection } = useContext(ScrollContext);
  const [formData, setFormData] = useState({
    formValues: initialValues,
    formErrors: {},
    isSubmit: false,
  });

  useEffect(() => {
    const sendEmail = async () => {
      const sentEmail = await emailjs.send(
        "service_e6ydg1j",
        "template_9w73v35",
        formData.formValues,
        "3Yd3Qz4R_neBtJarz"
      );
      console.log(sentEmail);
    };
    if (formData.isSubmit && Object.keys(formData.formErrors).length === 0) {
      try {
        sendEmail();
      } catch (error) {
        console.log(error);
      }
      setFormData({ ...formData, formValues: initialValues, isSubmit: false });
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        formValues: {
          ...prevState.formValues,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      formErrors: formValidation(formData.formValues),
      isSubmit: true,
    });
  };

  return (
    <section className="contact" ref={contactSection}>
      <h1 className="contact__header">Say Hello</h1>
      <div className="contact__container">
        <img className="contact__image" src={contactIcon} alt="Contact Me" />
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formErrors={formData.formErrors}
          formValues={formData.formValues}
        />
      </div>
    </section>
  );
}
