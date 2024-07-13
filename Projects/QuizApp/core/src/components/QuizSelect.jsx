import Header from '../components/framework/header'
import ConnectApi from '../api/ConnectApi'
export default function QuizSelect() {
    const ApiUrl = 'http://127.0.0.1:8000/'
    const [dataState] = ConnectApi(ApiUrl);
    console.log(dataState);
    return (
        <>
            <Header />
        </>
    )
}
