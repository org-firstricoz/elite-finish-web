import { useParams } from "react-router-dom";

const Forms: React.FC = () => {
  const { form_title } = useParams<{ form_title: string }>();

  return (
    <div className="overflow-hidden w-screen h-screen">
      <iframe
        className="w-full h-full overflow-hidden"
        src={`https://form.ricoz.in/projects/679de55a02ed7a627648db04/form/by-title/${form_title}`}
        title="Form"
      ></iframe>
    </div>
  );
};

export default Forms;
