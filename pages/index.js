import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { i18n } from "../next-i18next.config";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "../src/components/Project";
import Loans from "../src/components/Loan";
import Request from "../src/components/Request";
import Footer from "../src/components/Footer";
import Copyright from "../src/components/Copyright";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function Home(props) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loan: "",
    address: "",
    register: "",
    salary: "",
    description: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    const form = {
      name: formData.name,
      email: formData.email,
      loan: formData.loan,
      address: formData.address,
      phone: formData.phone,
      register: formData.register,
      salary: formData.salary,
      description: formData.description,
    };
    const res = fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setFormData((formData) => ({
      ...formData,
      name: "",
      email: "",
      phone: "",
      loan: "",
      address: "",
      register: "",
      salary: "",
      description: "",
    }));
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <About />
      <Projects />
      <Loans />
      <Request
        handleForm={handleForm}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
      <Copyright />
      {/* <div className="mt-screen">{t("home:dorj")}</div> */}
    </div>
  );
}

export default Home;
