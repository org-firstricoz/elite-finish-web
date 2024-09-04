import Dropdown from "@/components/EliteDropDown"
import Input from "@/components/EliteInput"
import TextArea from "@/components/EliteTextArea";
import React from "react"
import { Shape } from "../../landing-page/components/Shapes";
import { EliteButton } from "@/components";

interface ServiceDetailFormProps {
  showUploadFileButton: boolean;
}

const ServiceDetailForm: React.FC<ServiceDetailFormProps> = ({ showUploadFileButton }) => {

  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const options = [
    { value: "", label: "Choose services", disabled: true },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleImageUpload = React.useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0] || null;
      setSelectedFile(file);
    };
    input.click();
  }, []);

  React.useEffect(() => {
    console.log('>>>>>>>>>>>', selectedFile)
  }, [selectedFile])

  return (


    <div className="grid grid-cols-12  py-12 gap-8 ">

      <div className="md:col-span-6 col-span-12 h-auto">
        <Input
          label="Your Name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="md:col-span-6 col-span-12 py-0 my-0 ">
        <Input
          label="Your Email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Input
          label="Your Phone"
          type="phone"
          placeholder="Enter your phone"
          required
        />
      </div>
      <div className="md:col-span-6 col-span-12 h-auto">
        <Dropdown
          label="Services"
          options={options}
          required
          className=""
        />
      </div>

      <div className="col-span-12">
        <TextArea
          placeholder="Enter message"
          rows={7}
          label="message(optional)"
          required
          className=""
        />
      </div>
      <div className="col-span-12 flex flex-col gap-6">
        {showUploadFileButton && (
          <>
            <div className="flex gap-6 items-center">
              <EliteButton
                onClick={handleImageUpload}
                variant="ternary"
                className="flex gap-4 border border-black"
              >
                Choose File
                <Shape variant="file" className="h-fit w-fit" />
              </EliteButton>
              {!selectedFile && <h1>No file chosen</h1>}
            </div>
          </>
        )}

        <div>
          <EliteButton>Request Order</EliteButton>
        </div>
      </div>


    </div>


  )
}
export default ServiceDetailForm