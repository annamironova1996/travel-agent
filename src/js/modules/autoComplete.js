import autoComplete from "@tarekraafat/autocomplete.js";

import countryList from "./../helper/countryList";

function autoCompleteFunction () {
    const autoCompleteJS = new autoComplete({ 
    selector: "#autoCompleteCountry",
    placeHolder: "Бали, Индонезия",
    data: {
        src: countryList,
        caches: true,
    },
    resultItem: {
        highlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    },
    resultsList: {
        maxResults: 10,
    },
    searchEngine: 'strict'

});
}


export default autoCompleteFunction;