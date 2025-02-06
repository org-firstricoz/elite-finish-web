import { useParams } from "react-router-dom";

const Forms = () => {
  const { form_title } = useParams();
  return (
    <div className=" overflow-hidden w-screen h-screen">
      {/* {form_title} */}
      <iframe
        className=" w-full h-full overflow-hidden"
        src={`https:/form.ricoz.in/projects/679de55a02ed7a627648db04/form/by-title/${form_title}`}
      ></iframe>
    </div>
  );
};

export default Forms;
