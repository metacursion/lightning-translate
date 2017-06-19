({
  getRes: function(component, event, helper) {
    const key = 'AIzaSyDM1SK68b_O5qwADNB5KxB9BCfIV6hnvkc' // don't bother to use it, it's limited to my domain
    const api = 'https://translation.googleapis.com/language/translate/v2?key='
    const query = event.getParam("value")
    const body = JSON.stringify({
      q: query,
      target: 'en'
    })
    fetch(api + key, {
      method: 'POST',
      body: body
    }).then(m => m.json()).then(j => {
      if (j && j.data && j.data.translations) component.set('v.output', j.data.translations[0].translatedText)
    })
  }
})