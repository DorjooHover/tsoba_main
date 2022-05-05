import { useRouter } from "next/router";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import Navbar from "../../src/components/Navbar";
import LoanDetails from "../../src/components/Loan/loan";
import Request from "../../src/components/Request";
import Footer from "../../src/components/Footer";
import Copyright from "../../src/components/Copyright";
import { useState } from "react";
const Loan = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    const form = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
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
      time: "",
      date: "",
    }));
  };
  return (
    <>
      <Navbar />

      <Box
        sx={{
          height: "35vh",
          backgroundImage: "url('/img/contact.jpg')",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "64px",
          zIndex: 40,
        }}
      >
        <span className="bg-black opacity-50 absolute inset-0 z-10"></span>
        <div className="text-white relative z-20 text-center flex flex-col items-center">
          <h1 className="text-4xl mb-6 font-semibold uppercase">
            гадаад ЗАХИАЛАГЧ НАРТ
          </h1>
          <div className="flex uppercase relative items-center z-20">
            <h5 className="uppercase mr-4 text-sm tracking-widest">Зээл</h5>
            <Circle
              sx={{ marginRight: "1rem", width: "0.5rem", fill: "#b9a25f" }}
            />
            <h5 className="uppercase mr-4 text-sm tracking-widest">
              гадаад ЗАХИАЛАГЧ НАРТ
            </h5>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          backgroundImage: {
            lg: 'url("/img/loan_img.png")',
            xl: 'url("/img/loan_img.png")',
            md: "none",
            sm: "none",
            xs: "none",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "10px",
        }}
      >
        <LoanDetails items={"external"} />
      </Box>
      <Box sx={{ height: "140px" }}></Box>
      <Request
        handleForm={handleForm}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
      <Copyright />
    </>
  );
};

export default Loan;