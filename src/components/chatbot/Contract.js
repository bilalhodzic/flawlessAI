import React from "react";
import postData from "../../utils/postData";

const BASE_URL = "https://enzzza-dev.site/api";

function Contract(props) {
  console.log("🚀 ~ props", props);
  const [downloadLink, setdownloadLink] = React.useState("");
  const { actionProvider } = props;

  const handleContract = async () => {
    const data = props.contractData;

    const document = await postData("/contract", {
      adresa_poslodavca: data.contractData,
      ime_kompanije: data.ime_kompanije,
      ime_poslodavca: data.ime_poslodavca,
      adresa_radnika: data.adresa_radnika,
      ime_radnika: data.ime_radnika,
      jmbg: data.jmbg,
      datum_ugovora: data.datum_ugovora,
      mjesto_ugovora: data.mjesto_ugovora,
      datum: data.datum,
      grad: data.grad,
    });
    setdownloadLink(`${BASE_URL}${document.link}`);

    props.setState((prevState) => ({
      ...prevState,
      contractInProgress: false,
    }));
    console.log("🚀 ~ document", document);
  };

  const handleWrongData = async () => {
    props.actionProvider.askQuestionsAgain(props.defaultContractData);
  };
  return (
    <div style={{ fontSize: 14, margin: 12 }}>
      {Object.keys(props.contractData).map((item, index) => (
        <>
          <div
            style={{
              borderRadius: 14,
              height: "30",
              color: "#151719",
              backgroundColor: "#d1d3d3",
              margin: "6px 25px",
              paddingLeft: 20,
            }}
          >
            <span>{item}: </span>
            <span style={{ padding: "0 23px", fontWeight: "bold" }}>
              {props.contractData[item]}
            </span>
          </div>
        </>
      ))}
      {downloadLink ? (
        <button
          className="contractBtn"
          onClick={() => window.open(downloadLink, "_blank")}
        >
          Preuzmi dokument
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <button className="contractBtn" onClick={handleContract}>
            Da
          </button>
          <button className="contractBtn" onClick={handleWrongData}>
            Ne
          </button>
        </div>
      )}
    </div>
  );
}

export default Contract;
