import randomImage from "../services/apiserve";
export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const ERROR_PICTURE = 'ERROR_PICTURE';



export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export const errorPicture = () => ({ type: ERROR_PICTURE,});

export const fetchAPI = () => (dispatch) => {
  // Desenvolva aqui o código da action assíncrona
  dispatch(requestAPI())
  try{
   randomImage().then((data) => dispatch(getPicture(data)))
  }catch(error){
    dispatch(errorPicture())
  }
}
