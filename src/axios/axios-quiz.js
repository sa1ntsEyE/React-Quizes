import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-8ecfc-default-rtdb.firebaseio.com/'
})