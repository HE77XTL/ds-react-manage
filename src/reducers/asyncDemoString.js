const asyncDemoString = (state = 'he', action) => {
    switch (action.type) {
        case 'asyncDemo':
            return state + action.text
        default:
            return state
    }
};

export default asyncDemoString
