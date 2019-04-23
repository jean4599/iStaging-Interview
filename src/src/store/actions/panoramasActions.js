import { panoramasRef } from "../../config/firebase";
import { FETCH_PANORAMAS, CHANGE_MAIN_PANORAMAS } from "./types";

export const fetchPanoramas = () => async dispatch => {
  panoramasRef.once("value", snapshot => {
    dispatch({
      type: FETCH_PANORAMAS,
      payload: snapshot.val()
    });
  });
};

export const changeMainPanorama = (objectId) => dispatch => {
	dispatch({
		type: CHANGE_MAIN_PANORAMAS,
		payload: objectId
	})
}