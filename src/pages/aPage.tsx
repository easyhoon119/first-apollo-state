import { Link } from "react-router-dom";
import examValue from "../modules/exam";

function APage() {
    return (
        <>
            <div>a 페이지 입니다.</div>
            <p>{examValue()}</p>
            <Link to="/bPage">b 페이지로 이동</Link>
        </>
    );
}

export default APage;
