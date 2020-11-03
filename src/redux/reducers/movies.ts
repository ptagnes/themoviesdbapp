const moviesReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "SORT_MOVIES":
      console.log("sorting ", action.payload);
      return state;
    case "GET_MOVIES":
      console.log("getting ", action.payload);
      console.log(action.payload);
      return {
        // keep the old state
        ...state,
        // add all the movies from the database
        // they will come in a json format,
        // so we need to convert them to array
        moviesState: Object.values(action.payload), //???? probably not
      };
    default:
      return state;
  }
};
export default moviesReducer;
