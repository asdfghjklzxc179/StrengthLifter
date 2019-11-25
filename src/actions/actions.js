import axios from 'axios'
var moment = require('moment');
moment().format();

export const LOGGING_IN = 'LOGGING_IN' 


export const LOG_SET = 'LOG_SET'
export const SAVE_SESSION = 'SAVE_SESSION'
export const CLEAR_ACTIVE = 'CLEAR_ACTIVE'
export const LOAD_DEAD_STATS = 'LOAD_DEAD_STATS'
export const LOAD_BENCH_STATS = 'LOAD_BENCH_STATS'
export const LOAD_PRESS_STATS = 'LOAD_PRESS_STATS'
export const LOAD_CLEAN_STATS = 'LOAD_CLEAN_STATS'
export const LOAD_SQUAT_STATS = 'LOAD_SQUAT_STATS'
export const LOAD_PULLUP_STATS = 'LOAD_PULLUP_STATS'
export const QUOTE_START = 'QUOTE_START'
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS'
export const QUOTE_FAIL = 'QUOTE_FAIL'

// export const CREATING = 'CREATING' 
// export const DELETING = 'DELETING'
// export const UPDATING = 'UPDATING' 
// export const NOT_UPDATING = 'NOT_UPDATING' 

// export const DATA_SUCCESS = 'DATA_SUCCESS' 

// export const DATA_FAIL = 'DATA_FAIL' 
export const login = (creds) => dispatch => {
    dispatch({type: LOGGING_IN})
}
export const logSet = (set) => dispatch => {
    set.date = moment().format('MMM Do YY, kk:mm:ss')
    dispatch({type: LOG_SET, payload: set})
}

export const saveSession = (sets) => dispatch => {
    dispatch({type: SAVE_SESSION, payload: sets })
}

export const clearActive = () => dispatch => {
    dispatch({type: CLEAR_ACTIVE})
}

export const deadStats = (stats) => dispatch => {
    dispatch({type: LOAD_DEAD_STATS, payload: stats})
}

export const benchStats = (stats) => dispatch => {
    dispatch({type: LOAD_BENCH_STATS, payload: stats})
}

export const pressStats = (stats) => dispatch => {
    dispatch({type: LOAD_PRESS_STATS, payload: stats})
}

export const squatStats = (stats) => dispatch => {
    dispatch({type: LOAD_SQUAT_STATS, payload: stats})
}

export const cleanStats = (stats) => dispatch => {
    dispatch({type: LOAD_CLEAN_STATS, payload: stats})
}

export const pullupStats = (stats) => dispatch => {
    dispatch({type: LOAD_PULLUP_STATS, payload: stats})
}
export const getQuote = () => dispatch => {
    dispatch({type: QUOTE_START})
    axios
        .get("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .then(response => {
            dispatch({type: QUOTE_SUCCESS, payload: response})
        })
        .catch(error => {
            dispatch({type: QUOTE_FAIL, payload: error})
          })
}


// export const getSmurfs = () => dispatch => {
//   dispatch({type: FETCHING})
//   axios
//     .get('http://localhost:3333/smurfs')
//     .then(response => {
//       dispatch({type: DATA_SUCCESS, payload: response.data})
//     })
//     .catch(error => {
//       dispatch({type: DATA_FAIL, payload: error})
//     })
// }

// export const addSmurf = (newSmurf) => dispatch => {
//   dispatch({type: FETCHING})
//   axios
//     .post('http://localhost:3333/smurfs', newSmurf)
//     .then(response => {
//       dispatch({type: DATA_SUCCESS, payload: response.data})
//     })
//     .catch(error => {
//       dispatch({type: DATA_FAIL, payload: error})
//     })
// }

// export const updateSmurf = (newSmurf) => dispatch => {
//   dispatch({type: FETCHING})
//   dispatch({type: NOT_UPDATING})

//   axios
//     .put(`http://localhost:3333/smurfs/${newSmurf.id}`, newSmurf)
//     .then(response => {
//       dispatch({type: DATA_SUCCESS, payload: response.data})
//     })

//     .catch(error => {
//       dispatch({type: DATA_FAIL, payload: error})
//     })
// }

// export const changeUpdate = () => dispatch => {
//   dispatch({type: UPDATING})

// }
// export const deleteSmurf = (deleteSmurf) => dispatch => {
//   dispatch({type: FETCHING})

//   axios
//     .delete(`http://localhost:3333/smurfs/${deleteSmurf.id}`, deleteSmurf)
//     .then(response => {
//       dispatch({type: DATA_SUCCESS, payload: response.data})
//     })

//     .catch(error => {
//       dispatch({type: DATA_FAIL, payload: error})
//     })
// }
