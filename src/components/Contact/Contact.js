import { useState, useEffect, useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
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
    if (formData.isSubmit && Object.keys(formData.formErrors).length === 0) {
      console.log("Send " + formData.formValues);
      setFormData({ ...formData, formValues: initialValues, isSubmit: false });
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      formValues: { [e.target.name]: e.target.value },
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
