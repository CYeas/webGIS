<template>
    <div class="prompt">
            <!-- <div class="promptNav">
                您要找的是
            </div> -->
            <div class="promptContent">
                <ul>
                    <li v-for="item in getPromptDisplay" data-id="{{item.unique_id}}" @click="search">
                        <p class="promptName">{{item.title}}</p>
                        <p class="promptDesc" v-if="item.location">{{item.location}}</p>
                    </li>
                </ul>
            </div>
        </div>
</template>
<script>
    import { getPromptDisplay, getWhetherChoosingStart, getWhetherChoosingDest, getListAll } from '../getters'
    import { showSearchResult, setSearchResult } from '../actions/searchResult'
    import { setStart, setDest,  } from '../actions/navigate'
	import { setStartCoordinate, setDirectionCoordinate } from '../actions/coordinate'
    import { showNavigate } from '../actions/navigate'
    import { clearPrompt } from '../actions/prompt'
    import { closeSearchFloat, notChoosingStart, notChoosingDest } from '../actions/searchFloat'
    import { showSearchNav } from '../actions/searchNav'
    import { closeList } from '../actions/list'

    export default {
        vuex: {
            getters: {
                getPromptDisplay,
                getWhetherChoosingStart,
                getWhetherChoosingDest,
                getListAll
            },
            actions: { 
                showSearchResult,
                setStart,
                setDest,
                setStartCoordinate,
                setDirectionCoordinate,
                showNavigate,
                closeSearchFloat,
                notChoosingStart,
                notChoosingDest,
                showSearchNav,
                setSearchResult,
                closeList,
                clearPrompt
            }
        },
        methods: {
            search: function (e) {
                let that = this
                let node = e.target
                let nodeHtml, id
                if (node.className == "promptName") {
                    nodeHtml = node.innerHTML
                    id = node.parentNode.dataset.id
                } else {
                    nodeHtml = node.getElementsByClassName("promptName")[0].innerHTML
                    id = node.dataset.id
                }
                if (this.getWhetherChoosingStart) {
                    that.getPromptDisplay.map(function (item, index) {
                        if (item) {
                            if (item.unique_id == id) {
                                that.setStartCoordinate(item.coordinate)
                                that.setStart(item)
                            }
                        }
                    })
                    this.showNavigate()
                    this.notChoosingStart()
                    this.showSearchNav()
                    this.closeList()
                    this.closeSearchFloat()
                } else if (this.getWhetherChoosingDest) {
                    that.getPromptDisplay.map(function (item, index) {
                        if (item) {
                            if (item.unique_id == id) {
                                that.setDirectionCoordinate(item.coordinate)
                                that.setDest(item)
                            }   
                        }
                    })
                    this.showNavigate()
                    this.notChoosingDest()
                    this.showSearchNav()
                    this.closeList()
                    this.closeSearchFloat()
                } else {
                    let results = []
                    that.getListAll.map(function (item, index) {
                        if (item) {
                            if (item.unique_id == id) {
                                results.push(item)
                            }
                        }
                    })
                    this.closeList()
                    that.setSearchResult(results)
                    this.showSearchResult()
                }
                that.clearPrompt()
            }
        }
    }
</script>
<style>
    .prompt {
        width: 100%;
        height: calc(100% - 40px);
        box-sizing: border-box;
        overflow: scroll;
    }
    .promptNav {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        border-bottom: 1px solid #ccc;
    }
    .promptContent ul {
        list-style: none;
    }
    .promptContent ul li{
        border-bottom: 1px solid #ddd;
        padding: 15px;
    }
    .promptName {
        font-size: 16px;
    }
    .promptDesc {
        font-size: 14px;
        color: #999;
    }
</style>