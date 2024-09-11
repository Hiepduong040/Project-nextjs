"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getDataUser } from "../../../services/user.service";

interface User {
  username: string;
  email: string;
  registeredDate: string;
}

export default function UserDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userId) {
      getDataUser(userId).then((data) => setUser(data));
    }
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chi tiết người dùng: {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Ngày đăng ký: {user.registeredDate}</p>
    </div>
  );
}
