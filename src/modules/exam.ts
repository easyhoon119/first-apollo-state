import { makeVar } from "@apollo/client";

const examValue = makeVar("");

export const chanheExamValue = (content: string) => {
    examValue(content);
};

export default examValue;
