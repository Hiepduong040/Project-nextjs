"use client"
import React, { useState, useEffect } from "react";

const HomePage = () => {
  type TimeLeft = {
    hours: number;
    minutes: number;
    seconds: number;
  };

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-09-11") - +new Date();
    let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-800 py-2 text-center text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src="/logo.png" alt="Logo" className="inline-block h-10" />
              <span>
                <h3>HOCTOT247</h3>
              </span>
            </div>
            <div className="flex gap-8">
              <p>Khóa học</p>
              <p>Môn thi</p>
              <p>Đề thi</p>
              <p>Tài khoản</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-orange-400 py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">
          CỰC HOT! SĂN KHÓA HỌC CHỈ 1K TẠI HOCTOT247
        </h1>
        <div className="flex justify-center space-x-4 text-4xl font-bold text-white">
          <div>
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span> GIỜ
          </div>
          <div>
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span> PHÚT
          </div>
          <div>
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span> GIÂY
          </div>
        </div>  
        <button className="mt-5 rounded bg-yellow-500 px-8 py-3 text-white">
          XEM CHI TIẾT
        </button>
      </section>

      {/* Course List */}
      <section className="bg-white py-5">
        <div className="container mx-auto">
          
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-green-500 py-10 text-center text-white">
        <h2 className="text-2xl font-bold">
          Back to School - Sale KHỦNG Giá COOL
        </h2>
        <p className="mt-3">Khóa học 1K - Tất cả các lớp</p>
        <button className="mt-5 rounded bg-yellow-500 px-8 py-3">
          Khám phá ngay
        </button>
      </section>
    </div>
  );
};

export default HomePage;
