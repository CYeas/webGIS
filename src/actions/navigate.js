import * as types from '../store/constants'

export const showNavigate = ({ dispatch }, ...args) => {
    return dispatch(types.SHOW_NAVIGATE, ...args)
}
export const closeNavigate = ({ dispatch }, ...args) => {
    return dispatch(types.CLOSE_NAVIGATE, ...args)
}

export const displayChooseStart = ({ dispatch }, ...args) => {
    return dispatch(types.SHOW_CHOOSESTART, ...args)
}

export const closeChooseStart = ({ dispatch }, ...args) => {
	return dispatch(types.CLOSE_CHOOSESTART, ...args)
}

export const displayChooseDirection = ({ dispatch }, ...args) => {
	return dispatch(types.SHOW_CHOOSEDIRECTION, ...args)
}

export const closeChooseDirection = ({ dispatch }, ...args) => {
	return dispatch(types.CLOSE_CHOOSEDIRECTION, ...args)
}

export const showAllStarts = ({ dispatch }, ...args) => {
	return dispatch(types.SHOW_ALLSTARTS, ...args)
}

export const showPartialStarts = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_PARTIALSTARTS, ...args)
}

export const showAllDirections = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_ALLDIRECTIONS, ...args)
}

export const showPartialDirections = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_PARTIALDIRECTIONS, ...args)
}

export const showButton = ({dispatch}, ...args) => {
	return dispatch(types.SHOW_BUTTON, ...args)
}

export const disableButton = ({dispatch}, ...args) => {
	return dispatch(types.DISABLE_BUTTON, ...args)
}

export const setStart = ({dispatch}, ...args) => {
	return dispatch(types.SET_START, ...args)
}

export const setDest = ({dispatch}, ...args) => {
	return dispatch(types.SET_DEST, ...args)
}

export const setCheckStart = ({dispatch}, ...args) => {
	return dispatch(types.SET_CHECKSTART, ...args)
}

export const setCheckDest = ({dispatch}, ...args) => {
	return dispatch(types.SET_CHECKDEST, ...args)
}