

export const cultForm = () => {
    let html = `<h2>are we starting a cult?</h2>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">yes</label>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">no</label><br>`
    return html
}


const cultFormContainer = document.querySelector(".container")

cultFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "html") {
        window.alert("you're in")
    }
})

cultFormContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "css") {
        window.alert("yes we are")
    }
})




// surveyFormContainer.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "suggestion") {
//             // Get what the user typed into the form fields
//             const suggestion = document.querySelector("input[name='suggestion']").value
    
//             // Make an object out of the user input
//             const dataToSendToAS = {
//                 suggestion: suggestion
//             }
    
//             setSuggestion(dataToSendToAS)
            
//             console.log(dataToSendToAS)
    
//         } 
//     }
// )


// surveyFormContainer.addEventListener("click", clickEvent => {
    
//     if (clickEvent.target.id === "submitsurvey") {
        
//         let state = getState()
//         let selectedDays = state.selectedDays
//         let selectedTimes = state.selectedTimes
//         let selectedAreas = state.selectedAreas
//         let suggestion = state.suggestion

//         const dataToSendToAPI = {
//             days: selectedDays,
//             times: selectedTimes,
//             areas: selectedAreas,
//             suggestion: suggestion
//         }

//         saveSurvey(dataToSendToAPI)
//         console.log(dataToSendToAPI)
//     }
// })