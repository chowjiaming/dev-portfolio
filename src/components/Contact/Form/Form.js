import Input from "../../Shared/Input/Input";
import TextArea from "../../Shared/TextArea/TextArea";
import Button from "../../Shared/Button/Button";

export default function Form({ ...props }) {
  return (
    <form className="contact__form" onSubmit={props.handleSubmit}>
      <Input
        name="name"
        onChange={props.handleChange}
        placeholder="Your name"
        value={props.formValues.name}
        error={props.formErrors.name}
      />
      <Input
        name="email"
        onChange={props.handleChange}
        placeholder="Email Address"
        value={props.formValues.email}
        error={props.formErrors.email}
      />
      <Input
        name="subject"
        onChange={props.handleChange}
        placeholder="Subject"
        value={props.formValues.subject}
        error={props.formErrors.subject}
      />
      <TextArea
        name="message"
        onChange={props.handleChange}
        placeholder="Message"
        value={props.formValues.message}
        cols="30"
        rows="8"
        error={props.formErrors.message}
      />
      <Button classnames="button--secondary">
        Send Message
      </Button>
    </form>
  );
}
