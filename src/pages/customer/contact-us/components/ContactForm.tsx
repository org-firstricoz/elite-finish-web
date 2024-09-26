import { EliteButton, EliteDropdown, EliteInput, EliteTextArea } from "@/components";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    subject: "",
    enquiryType: "",
    message: "",
  });

  // Handler to update form state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted with data:", formDetails); 
    // TODO: Send form data to API
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex md:gap-8 gap-4 items-center">
        <EliteInput
          label="NAME"
          name="name"
          placeholder="Enter Your Name..."
          value={formDetails.name} // Controlled value
          onChange={handleChange} // Pass the handler
        />
        <EliteInput
          label="EMAIL ADDRESS"
          name="email"
          placeholder="Enter Your Email..."
          value={formDetails.email} // Controlled value
          onChange={handleChange} // Pass the handler
        />
      </div>

      <div className="flex md:gap-8 gap-4 items-center">
        <EliteInput
          label="SUBJECT"
          name="subject"
          placeholder="Enter Subject..."
          value={formDetails.subject} // Controlled value
          onChange={handleChange} // Pass the handler
        />
        <EliteDropdown
          label="Enquiry type"
          name="enquiryType"
          options={[
            { label: "Option 1", value: "option1", disabled: false },
            { label: "Option 2", value: "option2", disabled: false },
            { label: "Option 3", value: "option3", disabled: false },
          ]}
          value={formDetails.enquiryType} // Controlled value
          onChange={handleChange} // Pass the handler
        />
      </div>

      <EliteTextArea
        label="MESSAGE"
        name="message"
        rows={3}
        value={formDetails.message} // Controlled value
        onChange={handleChange} // Pass the handler
      />

      <EliteButton variant="primary" className="rounded-lg px-12 py-4" type="submit">
        Submit
      </EliteButton>
    </form>
  );
};

export default ContactForm;
