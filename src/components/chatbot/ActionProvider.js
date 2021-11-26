import axios from "axios";
import postData from "../../utils/postData";

// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleMessage = async (message) => {
    //call backend to get response
    let result = await postData(`/predict`, {
      intent: message,
    });

    //if message is not understandable  -- different type returned from backend

    //start contract
    if (result.intent.includes("korak") || result.intent.includes("ugovor")) {
      this.createMessage(result.intent);
      this.handleContract(result.intent);
    } else {
      this.createMessage(result.intent);
    }
  };

  handleContract = async (message = "") => {
    if (!this.stateRef.contractInProgress) {
      //First question
      this.createMessage("Potrebno mi je nekoliko vasih podataka:");
      let mess = this.createChatBotMessage("Koje je vase puno ime");
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, mess],
        contractInProgress: true,
        currentContractQuestion: "ime_radnika",
      }));
      this.addcontractDataState("datum", new Date().toLocaleDateString());
    } else {
      const data = this.stateRef.contractData;
      console.log("🚀 ~ data", data);
      const currentQ = this.stateRef.currentContractQuestion;

      if (!data.ime_radnika && currentQ === "ime_radnika") {
        this.addcontractDataState("ime_radnika", message); //add previous answer to state

        //Second question
        this.askNextQuestion("Puno ime kompanije?", "ime_kompanije");
      } else if (!data.ime_kompanije && currentQ === "ime_kompanije") {
        this.addcontractDataState("ime_kompanije", message); //add previous answer to state

        //Third question
        this.askNextQuestion("Puno ime poslodavca?", "ime_poslodavca");
      } else if (!data.ime_poslodavca && currentQ === "ime_poslodavca") {
        //add previous answer to state
        this.addcontractDataState("ime_poslodavca", message);

        // QUESTION 4
        this.askNextQuestion("Adresa radnika?", "adresa_radnika");
      } else if (!data.adresa_radnika && currentQ === "adresa_radnika") {
        this.addcontractDataState("adresa_radnika", message); //add previous answer to state

        //QUESTION 5
        this.askNextQuestion("Adresa poslodavca?", "adresa_poslodavca");
      } else if (!data.adresa_poslodavca && currentQ === "adresa_poslodavca") {
        this.addcontractDataState("adresa_poslodavca", message); //add previous answer to state

        //QUESTION 6
        this.askNextQuestion("JBMG radnika?", "jmbg");
      } else if (!data.adresa_poslodavca && currentQ === "adresa_poslodavca") {
        this.addcontractDataState("adresa_poslodavca", message); //add previous answer to state

        //QUESTION 7
        this.askNextQuestion("JBMG radnika?", "jmbg");
      } else if (!data.jmbg && currentQ === "jmbg") {
        this.addcontractDataState("jmbg", message); //add previous answer to state

        //QUESTION 8
        this.askNextQuestion("Datum ugovora?", "datum_ugovora");
      } else if (!data.datum_ugovora && currentQ === "datum_ugovora") {
        this.addcontractDataState("datum_ugovora", message); //add previous answer to state

        //QUESTION 9
        this.askNextQuestion("Mjesto ugovora?", "mjesto_ugovora");
      } else if (!data.mjesto_ugovora && currentQ === "mjesto_ugovora") {
        this.addcontractDataState("mjesto_ugovora", message); //add previous answer to state

        //QUESTION 10
        this.askNextQuestion("Grad?", "grad");
      } else if (!data.grad && currentQ === "grad") {
        this.addcontractDataState("grad", message); //add previous answer to state

        this.checkIfContractFilled(data);
      } else {
        console.log("doso sam do kraja");

        let mess = this.createChatBotMessage("Da li su tacni ovi podaci?", {
          widget: "contract",
        });
        this.addMessageToState(mess);
      }
    }
  };

  askNextQuestion = (message, fieldName) => {
    let mess = this.createChatBotMessage(message);
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, mess],
      currentContractQuestion: fieldName,
    }));
  };

  checkIfContractFilled = (obj) => {
    const isEmpty = Object.values(obj).every((x) => x === null || x === "");
    if (!isEmpty) {
      let mess = this.createChatBotMessage("Da li su tacni ovi podaci?", {
        widget: "contract",
      });
      this.addMessageToState(mess);
    } else {
      //this.handleContract("", obj);
    }
  };

  askQuestionsAgain = (defaultState) => {
    this.setState((prevState) => ({
      ...prevState,
      contractData: defaultState,
      contractInProgress: false,
      currentContractQuestion: "ime_radnika",
    }));
    this.createMessage("Zao mi je. Pokusat cemo ponovo");
    this.createMessage("Sacekajte trenutak");

    setTimeout(() => {
      this.handleContract();
    }, 5000);
  };

  createMessage = (message) => {
    let mess = this.createChatBotMessage(message);
    this.addMessageToState(mess);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  addcontractDataState = (data, value) => {
    let newData = this.stateRef.contractData;
    newData[data] = value;

    this.setState((prevState) => ({
      ...prevState,
      contractData: newData,
    }));
  };
}
export default ActionProvider;
