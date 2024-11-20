import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PickPhoto = () => {
  let params = useParams();
  const name = params.name;
  const code = params.code;
  const mail = params.mail;

  useEffect(() => {
    console.log(name);
    console.log(code);
    console.log(mail);
  }, [name, code, mail]);

  return <div className="bg-dark w-100 " id="Clients"></div>;
};
export default PickPhoto;
