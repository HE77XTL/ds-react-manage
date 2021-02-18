const menuStatus = (state = false, action) => {
    switch (action.type) {
        case 'COLLAPSE_MENU':
            return action.menuStatus;
        default:
            return state
    }
};

export default menuStatus
