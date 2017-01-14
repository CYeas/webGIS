export function getShowInstruction (state) {
    return state.instruction.whetherShowInstruction
}

export function getShowNavigate(state) {
  return state.navigate.whetherShowNavigate
}

export function getShowChooseStart (state) {
	return state.navigate.whetherShowChooseStart
}

export function getShowChooseDirection (state) {
	return state.navigate.whetherShowChooseDirection
}

export function getShowStarts (state) {
	return state.navigate.showStarts
}

export function getShowDirections (state) {
	return state.navigate.showDirections
}

export function getShowButton (state) {
	return state.navigate.disableButton
}

export function getUserCoordinate (state) {
	return state.coordinate.userCoordinate
}

export function getBuilding (state) {
	return state.coordinate.buildingCoordinate
}

export function getBriefContent (state) {
	return state.instruction.brief
}

export function getBriefTitle (state) {
	return state.instruction.title
}

export function getPathLayer (state) {
	return state.map.pathLayer
}

export function getStartCoordination (state) {
	return state.coordinate.start
}

export function getDirectionCoordination (state) {
	return state.coordinate.direction
}

export function getDestId (state) {
	return state.instruction.id
}

export function getDest (state) {
	return state.navigate.direction
}

export function getStart (state) {
	return state.navigate.start
}

export function checkStart (state) {
	return state.navigate.checkStart
}

export function checkDest (state) {
	return state.navigate.checkDest
}

export function getDisableButton (state) {
	return state.navigate.checkStart && state.navigate.checkDest
}

export function getShowNavigateLogo (state) {
	return !(state.navigate.whetherShowNavigate || state.instruction.whetherShowInstruction)
}

export function getShowSearchFloat (state) {
	return state.searchFloat.whetherShowSearchFloat
}

export function getShowHot (state) {
	return state.hot.whetherShowHot
}

export function getShowSearchResult (state) {
	return state.searchResult.whetherShowSearchResult
}

export function getListDisplay (state) {
	return state.list.display
}

export function getShowList (state) {
	return state.list.whetherShowList
}

export function getShowPrompt (state) {
	return state.prompt.whetherShowPrompt
}

export function getPromptDisplay (state) {
	return state.prompt.display
}

export function getListBlocks (state) {
	return state.list.blocks
}

export function getListBusinesses (state) {
	return state.list.businesses
}

export function getListTeams (state) {
	return state.list.teams
}

export function getListAll (state) {
	return (state.list.blocks).concat(state.list.teams)
}

export function getShowSearchNav (state) {
	return state.searchNav.whetherShowSearchNav
}

export function getWhetherChoosingStart (state) {
	return state.searchFloat.choosingStart
}

export function getWhetherChoosingDest (state) {
	return state.searchFloat.choosingDest
}

export function getSearchResults (state) {
	return state.searchResult.results
}

export function getShowDetail (state) {
	return state.detail.whetherShowDetail
}

export function getDetail (state) {
	return state.detail.display
}

export function getMapFloor (state) {
	return state.map.nowFloor
}

export function getMapLayer (state) {
	return state.map.mapLayer
}

export function getVectorLayer (state) {
	return state.map.VectorLayer
}

export function getF1Layer (state) {
	return state.map.f1_layer
}

export function getF2Layer (state) {
	return state.map.f2_layer
}

export function getF3Layer (state) {
	return state.map.f3_layer
}

export function getF4Layer (state) {
	return state.map.f4_layer
}

export function getLayers (state) {
	return state.map.layers
}

export function getIntro (state) {
	return state.instruction.intro
}

export function getRoute (state) {
	return state.navigate.route
}

export function getHots (state) {
	return state.hot.hots
}

export function getKeyword (state) {
	return state.searchFloat.searchKeyword
}

export function getOldDisplay (state) {
	return state.list.oldDisplay
}

export function getShowDetailBase (state) {
	return state.detail.showBase
}

export function getShowDetailBusiness (state) {
	return state.detail.showBusiness
}

export function getNowSelectItem (state) {
	return state.list.nowSelect
}

export function getShowIndoor (state) {
	return state.instruction.whetherShowIndoor
}

export function getShowBusiness (state) {
	return state.instruction.whetherShowBusiness
}

export function getShowNavigateContent (state) {
	return state.navigate.whetherShowNavigateContent
}

export function getInitialType (state) {
	return state.coordinate.type
}

export function getInitialFloor (state) {
	return state.coordinate.floor
}

export function getInitialUniqueId (state) {
	return state.coordinate.uniqueId
}

export function getNowType (state) {
	return state.navigate.nowType
}

export function getNowFloor (state) {
	return state.navigate.nowFloor
}

export function getStartFloor (state) {
	return state.navigate.startFloor
}

export function getDestFloor (state) {
	return state.navigate.destFloor
}

export function getStartLayer (state) {
	return state.navigate.startLayer
}

export function getDestLayer (state) {
	return state.navigate.destLayer
}

export function getIsNavigating (state) {
	return state.navigate.isNavigating
}