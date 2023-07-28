import {MODAL_SHOW, MODAL_HIDE} from '../actions'

const defaulState = {
    modalOpen : false,
    modalData : {
        title : '',
        text : ''
    }
}

export default function commonReducer (state = defaulState, action) {
    switch (action.type) {
        case MODAL_SHOW:
            return {
                ...state,
              modalOpen : true,
               modalData : action.payload,
            };
           case MODAL_HIDE: 
              return {
                  ...state,
                  modalOpen : false
              }
        default:
            return state;
    }
}