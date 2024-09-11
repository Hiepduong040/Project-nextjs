import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getQuestionById } from "../../../../../services/question.service";

interface Question {
  text: string;
  answer: string;
}

export default function QuestionDetailPage() {
  const router = useRouter();
  const { questionId } = router.query;
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (typeof questionId === "string") {
      getQuestionById(questionId).then(setQuestion);
    }
  }, [questionId]);

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chi tiết câu hỏi</h1>
      <p>{question.text}</p>
      <p>Đáp án: {question.answer}</p>
    </div>
  );
}
