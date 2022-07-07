import { cultForm } from "./cultform.js"

const cultContainer = document.querySelector(".container")


cultContainer.addEventListener(
    "stateChanged",
    customEvent => {
        // surveyFormRender()
    })

const cultFormRender = () => {
    // fetchDays()
    //         .then(() => fetchNashvilleAreas())
    //     .then(
    //         () => {
                cultContainer.innerHTML = cultForm()
        //     }
        // )
}

cultFormRender()
