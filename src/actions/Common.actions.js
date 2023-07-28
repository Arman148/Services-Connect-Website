export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export const modalShow = (data) => {
    return {
        type : MODAL_SHOW,
        payload : data
    }
}

export const modalHide = (data) => {
    return {
        type : MODAL_HIDE,
    }
}