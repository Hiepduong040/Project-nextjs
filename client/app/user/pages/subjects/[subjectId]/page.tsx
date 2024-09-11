import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getExamsBySubject } from "../../../../../services/exam.service";
import Link from "next/link";

interface Exam {
  id: string;
  title: string;
}

export default function SubjectDetailPage() {
  const router = useRouter();
  const { subjectId } = router.query;
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    if (typeof subjectId === "string") {
      getExamsBySubject(subjectId).then(setExams);
    }
  }, [subjectId]);

  if (!exams.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Đề thi thuộc môn học</h1>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link href={`/exams/${exam.id}`}>{exam.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
