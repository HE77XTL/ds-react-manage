const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';// 修改语言，涉及i18n 和 ant 组件的设置

export const changeLanguage = languageType => {
    return {
        type: TOGGLE_LANGUAGE,
        languageType
    }
};


function asyncDemo() {
    return {
        type: "asyncDemo",
        text: 'he'
    };
}

export const asyncExample = () => {
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(asyncDemo());
        }, 2000);
    };
}

