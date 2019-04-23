import { FETCH_PANORAMAS, CHANGE_MAIN_PANORAMAS } from "../actions/types";

const initialState = {
	itemsList:[],
  itemsDict: {},
  mainPanoramaId: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PANORAMAS:
      const panoramas = Object.values(action.payload);
      panoramas.sort((a,b)=>{
        return a.data.index-b.data.index
      })
  		return {
  			...state,
  			itemsList: panoramas,
        itemsDict: action.payload,
        mainPanoramaId: panoramas[0].data.objectId
  		};
    case CHANGE_MAIN_PANORAMAS:
      const id = action.payload;
      return {
        ...state,
        mainPanoramaId: id
      }
    default:
      return state;
  }
};