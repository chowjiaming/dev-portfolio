import { Input } from "../Shared/Input/Input";
import { TextArea } from "../Shared/TextArea/TextArea";
import Button from "../Shared/Button/Button";

export const Form = ({
  handleChange,
  handleSubmit,
  formValues,
  formErrors,
}) => {
  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <Input
        name="name"
        onChange={handleChange}
        placeholder="Your name"
        value={formValues.name}
        error={formErrors.name}
      />
      <Input
        name="email"
        onChange={handleChange}
        placeholder="Email Address"
        value={formValues.email}
        error={formErrors.email}
      />
      <Input
        name="subject"
        onChange={handleChange}
        placeholder="Subject"
        value={formValues.subject}
        error={formErrors.subject}
      />
      <TextArea
        name="message"
        onChange={handleChange}
        placeholder="Message"
        value={formValues.message}
        cols="30"
        rows="8"
        error={formErrors.message}
      />
      <Button
        block="hero__button"
        modifier="button--secondary"
        alt="Send Message Button"
        text="Send"
      />
    </form>
  );
};
