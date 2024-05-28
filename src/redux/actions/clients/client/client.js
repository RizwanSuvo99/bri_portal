import clientApi from "./clientApi";
import axios from "axios";
export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

const formateData = (data) => ({
  ...data,
});

export const fetchAll = () => (dispatch) => {
  clientApi
    .client()
    .fetchAll()
    .then((response) => {
      
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data.result,
      });
    })
    .catch((err) =>  "error");
};

export const create = (data, onSuccess) => (dispatch) => {
  data = formateData(data);
  
  clientApi
    .client()
    .create(data)
    .then((res) => {
      
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data.result,
      });
      clientApi
        .client()
        .fetchAll()
        .then((response) => {
          dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: response.data.result,
          });
        });

      onSuccess();
    })
    .catch();
};

export const update = (id, data, onSuccess) => (dispatch) => {
  data = formateData(data);
  clientApi
    .client()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch();
};

export const Delete = (id, onSuccess) => (dispatch) => {
  clientApi
    .client()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch();
};

export const getInitialData = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:5001/client/get").then((response) => {
      dispatch({ type: "GET_ALL_DATA", data: response.data });
    });
  };
};

export const filterData = (value) => {
  return (dispatch) => dispatch({ type: "FILTER_DATA", value });
};
