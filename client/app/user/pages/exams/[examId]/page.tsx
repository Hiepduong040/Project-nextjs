import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getQuestionsByExam } from "../../../../../services/question.service";
import Link from "next/link";

interface Question {
  id: string;
  text: string;
}

export default function ExamDetailPage() {
  const router = useRouter();
  const { examId } = router.query;
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (typeof examId === "string") {
      getQuestionsByExam(examId).then(setQuestions);
    }
  }, [examId]);

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Câu hỏi thuộc đề thi</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link href={`/questions/${question.id}`}>{question.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
