import postReducer from "./postReducer";
import msgReducer from "./msgReducer";

const GET_STATE = "GET";
const SUB = "SUB";

let store = {
  _state: {
    msgPage: {
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
    },

    postPage: {
      posts: [
        { id: 1, post: "hi" },
        { id: 2, post: "my" },
        { id: 3, post: "first" },
        { id: 4, post: "post" },
        { id: 5, post: "today!" },
      ],
      updText: { id: 7, post: "postPageText" },
    },
  },

  _getState() {
    return this._state;
  },

  _rerender() {},
  subscribe(observer) {
    this._rerender = observer;
  },

  dispatch(action) {
    this._state.postPage = postReducer(this._state.postPage, action);
    this._state.msgPage = msgReducer(this._state.msgPage, action);
    if (action.type === SUB) {
      this.subscribe(action.text);
    } else if (action.type === GET_STATE) {
      return this._getState();
    }
    this._rerender(this._state);
  },
};

export const getAC = () => ({ type: GET_STATE });
export const subAC = (text) => ({ type: SUB, text: text });

export default store;
window.store = store;
