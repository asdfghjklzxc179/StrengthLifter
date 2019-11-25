import { LOG_SET, SAVE_SESSION, CLEAR_ACTIVE, LOAD_DEAD_STATS, LOAD_BENCH_STATS, LOAD_CLEAN_STATS, LOAD_PRESS_STATS, LOAD_PULLUP_STATS, LOAD_SQUAT_STATS,
QUOTE_FAIL, QUOTE_START, QUOTE_SUCCESS} from './actions'
var moment = require('moment');
moment().format();
const initialState = {
    activeSession: [

    ],
    //for each user? 
    sessions: [

    ],
    deadStats: [],
    benchStats: [],
    pressStats: [],
    cleanStats: [],
    pullupStats: [],
    squatStats: [],
    quote: [],
    // deadSets: [],
    // benchSets: [],
    // pressSets: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOG_SET: {
            let newSet = {
                lift: action.payload.lift,
                weight: action.payload.weight,
                reps: action.payload.reps,
                date: action.payload.date,
            }
            return {
                ...state,
                activeSession: [...state.activeSession, newSet],
            }
        }
        case SAVE_SESSION: {
            return {
                ...state,
                sessions: [...state.sessions, action.payload],
                // deadSets: [...state.deadSets, action.payload
                //     .filter(set => set.lift === "Deadlift" )],
            }
        }
        case CLEAR_ACTIVE: {
            return {
                ...state,
                activeSession: [],

            }
        }
        case LOAD_DEAD_STATS: {
            return {
                ...state,
                deadStats: action.payload,

            }
        }
        case LOAD_BENCH_STATS: {
            return {
                ...state,
                benchStats: action.payload,

            }
        }
        case LOAD_PRESS_STATS: {
            return {
                ...state,
                pressStats: action.payload,

            }
        }
        case LOAD_SQUAT_STATS: {
            return {
                ...state,
                squatStats: action.payload,

            }
        }
        case LOAD_CLEAN_STATS: {
            return {
                ...state,
                cleanStats: action.payload,

            }
        }
        case LOAD_PULLUP_STATS: {
            return {
                ...state,
                pullupStats: action.payload,

            }
        }
        case QUOTE_SUCCESS: {
            return {
                ...state,
                quote: action.payload,

            }
        }
        default: 
            return state;
        }
}

export default reducer
