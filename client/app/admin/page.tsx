import ECommerce from "../../components/Dashboard/ECommerce";
import { Metadata } from "next";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Admin Online Exam",
  description: "Admin Dashboard ",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
