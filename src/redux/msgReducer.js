const UPD_MSG = "UPD-MSG";
const ADD_MSG = "ADD-MSG";

let initialState = {
  chats: [
    { id: 1, name: "Janis" },
    { id: 2, name: "peteris" },
    { id: 3, name: "andris" },
    { id: 4, name: "vova" },
    { id: 5, name: "bora" },
  ],
  messages: [
    { id: 1, msg: "hi" },
    { id: 2, msg: "hail" },
    { id: 3, msg: "hello" },
    { id: 4, msg: "ello" },
  ],
  updText: { id: 6, msg: "msgPageText" },
};

const msgReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case UPD_MSG:
      stateCopy = {
        ...state,
        updText: { ...state.updText, msg: action.text },
      };
      return stateCopy;
    case ADD_MSG:
      let msgText = state.updText.msg;
      stateCopy = {
        ...state,
        updText: { ...state.updText, msg: "" },
        messages: [...state.messages, { id: 6, msg: msgText }],
      };
      return stateCopy;
    default:
      return state;
  }
};

export const updMsg = (text) => ({ type: UPD_MSG, text: text });
export const sendMsg = () => ({ type: ADD_MSG });

export default msgReducer;
