import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const postReducer = (state, action) => {
  switch (action.type) {
    case "get_post":
      return { ...state, posts: action.payload };
    case "delete_post":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "edit_post":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "set_http_error":
      console.log("HTTP ERROR DETECTED");
      return { ...state, httpError: action.payload };
    case "unset_http_error":
      console.log("HTTP ERROR RESOLVED");
      return { ...state, httpError: null };
    default:
      return state;
  }
};

const getDiaryPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/posts");
      dispatch({ type: "get_post", payload: response.data });
    } catch {
      dispatch({ type: "set_http_error", payload: "Could not fetch posts" });
      setTimeout(() => dispatch({ type: "unset_http_error" }), 2500);
    }
  };
};

const addDiaryPost = (dispatch) => {
  return async (title, content, date, image, callback) => {
    try {
      const response = await jsonServer.post("/posts", {
        title,
        content,
        date,
        image,
      });
    } catch {
      dispatch({ type: "set_http_error", payload: "Could not add post" });
      setTimeout(() => dispatch({ type: "unset_http_error" }), 2500);
    }
    if (callback) {
      callback();
    }
  };
};

const deleteDiaryPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/posts/${id}`);
      dispatch({ type: "delete_post", payload: id });
    } catch {
      dispatch({ type: "set_http_error", payload: "Could not delete post" });
      setTimeout(() => dispatch({ type: "unset_http_error" }), 2500);
    }
  };
};

const editDiaryPost = (dispatch) => {
  return async (id, title, content, date, image, callback) => {
    try {
      await jsonServer.put(`/posts/${id}`, { title, content, date, image });

      dispatch({
        type: "edit_post",
        payload: { id, title, content, date, image },
      });
    } catch {
      dispatch({ type: "set_http_error", payload: "Could not edit post" });
      setTimeout(() => dispatch({ type: "unset_http_error" }), 2500);
    }
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  postReducer,
  {
    getDiaryPosts,
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost,
  },
  []
);