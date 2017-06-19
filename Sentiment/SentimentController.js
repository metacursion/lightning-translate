({
    getRes : function(component, event, helper) {
        const key = 'AIzaSyDGTM7TBaq-8g7Ey93AUDnLUBvjlrlzAuE'
        const api = 'https://translation.googleapis.com/language/translate/v2?key='
        const query = event.getParam("value")
        const body = JSON.stringify( {q: query, target: 'en' })
        fetch(api+key, {method: 'POST', body:body})
        .then( m => m.json() )
        .then( j => {
            console.log(j)
            if( j && j.data && j.data.translations )
            	component.set('v.output', j.data.translations[0].translatedText)
        })
        }
        })