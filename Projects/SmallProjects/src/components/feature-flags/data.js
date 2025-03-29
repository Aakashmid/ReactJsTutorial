const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: false,
    showSearchAutocomplete: true,
    showMultipleTabs: true,
    showTreeView: false,
}

const fetureFlagsDataServiceCall = ()=>{
    return new Promise((resolve, reject) => {
      if(dummyApiResponse){
        resolve(dummyApiResponse)
      }else{
        reject(new Error('Data is not available ! Please wait'))
      }
    })
}

export default fetureFlagsDataServiceCall;