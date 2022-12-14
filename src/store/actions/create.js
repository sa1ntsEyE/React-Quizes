import {CREATE_QUIZ_ACTION, RESET_QUIZ_CREATION} from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_ACTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz () {
    return async (dispatch, getState) => {
        await axios.post('quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}