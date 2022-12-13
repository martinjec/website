import { addPost } from "./postReducer";
import postReducer from "./postReducer";

it("length of posts should incremented", () => {
  let action = addPost("hail");
  let state = {
    posts: [
      { id: 1, post: "hi" },
      { id: 2, post: "my" },
      { id: 3, post: "first" },
      { id: 4, post: "post" },
      { id: 5, post: "today!" },
    ],
  };
  let newState = postReducer(state, action);

  expect(newState.posts.length).toBe(6);
});
