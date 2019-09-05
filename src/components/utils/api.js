const baseURL = 'https://assessment.scitodate.com/api/segment'

const getData = (segment) => {
  const endpoint = `${baseURL}/${segment}`;
  return fetch(endpoint)
  .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      return response.json()
      
      // .then((data) => (data));
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

export { getData }


