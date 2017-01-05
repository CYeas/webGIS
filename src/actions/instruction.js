import * as types from '../store/constants'

export const showInstruction = ({ dispatch }, ...args) => {
    return dispatch(types.SHOW_INSTRUCTION, ...args)
}
export const closeInstruction = ({ dispatch }, ...args) => {
    return dispatch(types.CLOSE_INSTRUCTION, ...args)
}

export const changeBrief = ({dispatch}, ...args) => {
	return dispatch(types.CHANGE_BRIEF, ...args)
}

export const changeTitle = ({dispatch}, ...args) => {
	return dispatch(types.CHANGE_TITLE, ...args)
}

export const setDestId = ({dispatch}, ...args) => {
	return dispatch(types.SET_DESTID, ...args)
}

export const setIntro = ({dispatch}, ...args) => {
	return dispatch(types.SET_INTRO, ...args)
}

export const showItsIndoor = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_ITS_INDOOR, ...args)
}

export const showItsBusiness = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_ITS_BUSINESS, ...args)
}