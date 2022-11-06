import { useReactiveVar } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import examValue, { chanheExamValue } from "../modules/exam";

function BPage() {
    const navigate = useNavigate();
    const exam = useReactiveVar(examValue);

    const onChange = (e: any) => {
        chanheExamValue(e.target.value);
    };

    return (
        <>
            <div>b 페이지 입니다.</div>
            <input type="text" placeholder="검색" onChange={onChange} />
            <p>{exam}</p>
            <button
                onClick={() => {
                    navigate("/");
                }}>
                a 페이지로 이동
            </button>
        </>
    );
}

export default BPage;
