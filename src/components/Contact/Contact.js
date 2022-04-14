import { useState, useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import Input from "../Shared/Input/Input";
import "./Contact.css";

export default function Contact() {
  const { contactSection } = useContext(ScrollContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInput = (event) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  return (
    <section className="contact__container" ref={contactSection}>
      <h1 className="contact__header">Contact Me</h1>
      <form className="contact__form">
        <Input
          name="name"
          label="Name"
          placeholder="Billy Bob"
          type="text"
          value={contactData.name}
          onChange={handleInput}
          variant="form__input--primary"
        />
        <Input
          name="email"
          label="Email"
          placeholder="billy@bob.com"
          type="text"
          value={contactData.email}
          onChange={handleInput}
          variant="form__input--primary"
        />
        <Input
          name="subject"
          label="Subject"
          placeholder="Looking to Hire!"
          type="text"
          value={contactData.subject}
          onChange={handleInput}
          variant="form__input--primary"
        />
        <Input
          name="subject"
          label="Subject"
          placeholder="We love your amazing work, we want to hire you!"
          type="text"
          value={contactData.message}
          onChange={handleInput}
          variant="form__input--textbox"
        />
      </form>
    </section>
  );
}
