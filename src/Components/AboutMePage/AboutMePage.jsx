import { Col, Container, Row } from "react-bootstrap";

const AboutMePage = () => {
  return (
    <>
      <div id="AboutMe" className="position-relative">
        <Row className="w-100 m-0">
          <Col className="col-12 vh-15 text-light d-flex align-items-end justify-content-center">
            <span className="cursive fs-4 px-5 d-flex justify-content-center align-items-bottom">
              {"''"}Ciao, sono Aniello
              <br /> e ho la fortuna di fare il fotografo per passione e per
              professione. Non so immaginare la mia vita senza impugnare almeno
              una volta al giorno una delle mie fotocamere.
              {"''"}
            </span>
          </Col>
          <Col className="bg-aniedd col-12 col-xl-6 text-white text-1 p-5"></Col>

          <Col className="col-12 col-xl-6 text-light px-5 d-flex align-items-center justify-content-center small bg-light text-dark">
            <Container className="p-5 text-1 small">
              {"''"} Ho scoperto la foto come forma naturale delle mie azioni e
              da quel momento, circa 20 anni, non faccio altro che cercare la
              moltitudine dei linguaggi che essa stessa suggerisce; mi emoziono
              sempre per il bello che si presenta d’avanti ai miei occhi e non
              posso fare a meno di fotografarlo.
              <br />
              <br />
              Sono fermamente convinto che una buona foto sia il frutto di un
              istante che si presenta a noi in perfetta armonia, quello che
              viene dopo, in linea di massima, è solo una forzatura, la natura
              le persone e le loro azioni sono e resteranno per sempre la cosa
              più bella che esiste e che vale la pena fotografare.
              <br />
              <br />
              Vision Studio è la mia “bottega di fotografo” sono di Procida,
              un’isola straordinaria del golfo di Napoli, ma sono sempre pronto
              a partire per raggiungere chiunque abbia bisogno dei miei racconti
              fotografici.
              <br />
              <br />
              Ci sono delle cose in particolare che amo fotografare: matrimoni,
              danza, teatro e la vita delle persone; ma mi occupo anche di
              pubblicità, eventi sportivi, e scrivere libri.
              <br />
              <br />
              Da sempre con me le mie fidatissime camere Nikon e Fuji; amo molto
              avere a disposizione ottiche per ogni tipo di esigenza, questo mi
              spinge ad avere un parco di lenti sempre in continua espansione.
              <br />
              <br />
              La professione del fotografo impone una certa attenzione verso le
              novità tecnologiche, questo mi porta ad essere sempre attento a
              tutto quello che mi puo far ottenere i migliori risultati per i
              miei clienti.
              <br />
              <br />
              Ci tengo a precisare, però, che le macchine sono solo un mezzo per
              la fotografia, le mie immagini nascono e nasceranno sempre prima
              nella mia mente, perché sono il diretto risultato dei miei sensi.
              <br />
              <br />
              Grazie per avermi dedicato qualche minuto del vostro tempo, vi
              saluto con la speranza di non disattendere le vostre aspettative.
              {"''"}
            </Container>
          </Col>
        </Row>
        <Row className=" bg-light py-3">
          <Col className="col-5 p-5">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Pku5yZWiTMQ"
                title="Aniello Intartaglia B Roll handheld"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AboutMePage;
