import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientsPage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [code, setCode] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div
      id="Clients"
      className="d-flex align-items-center bg-secondary justify-content-center"
    >
      <div className="bg-light border border-dark p-5 rounded-2 InputBox">
        <div className="text-1 p-3 fs-5">ENTER YOUR CLIENT SERVICE CODE</div>
        <div className="text-center d-flex flex-column inputfields">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="eMail"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />

          <input
            required
            type="text"
            placeholder="Your Code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <div className="text-center inputbtns d-flex justify-content-around mt-4">
          <div
            id="cancelBtn"
            className="px-4 py-2 border border-dark rounded-2 shadow-lg"
            onClick={() => (
              setCode(""), setMail(""), setCheck(false), setName("")
            )}
          >
            Cancel
          </div>
          <div
            id="acceptBtn"
            className="text-light px-4 py-2 border border-dark rounded-2 shadow-lg"
            onClick={() => setCheck(true)}
          >
            Accept
          </div>
        </div>
        <>
          {check === true ? (
            <>
              {mail === "esempio@email.com" && code === "bellaciao" ? (
                <div className="p-5 bg-success rounded-2 shadow-lg text-1 fs-5 mt-5">
                  Codice Corretto. Verrai reindirizzato alla pagina a breve!
                </div>
              ) : (
                <div className="p-5 bg-danger rounded-2 shadow-lg text-1 fs-5 mt-5">
                  Codice Errato. Controlla il codice inserito oppure la mail
                  fornita!
                </div>
              )}
            </>
          ) : null}
          {/* <>
            {mail === "esempio@email.com" && code === "bellaciao" ? (
              <div>
                Codice Corretto. Verrai reindirizzato alla pagina a breve!
              </div>
            ) : (
              <div>
                Codice Errato. Controlla il codice inserito oppure la mail
                fornita!
              </div>
            )}
          </> */}
        </>
        {/* {correct === true ? navigate(`/`) : null} */}
      </div>
    </div>
  );
};
export default ClientsPage;
