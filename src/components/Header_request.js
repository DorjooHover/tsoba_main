import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Image from "next/image";
const BootstrapButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "#FEC405",
  marginLeft: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#FEC405",
    borderColor: "#FEC405",
  },
});
const HeaderRequest = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/img/header_request_bg.jpg")',
        backgroundSize: "260%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      py={"40px"}
      position={"relative"}
      px={"10px"}
    >
      <Box position="relative" zIndex={20} maxWidth={1200} mx="auto">
        <div className="text-center">
          <h1 className="uppercase mb-3 text-2xl text-white">
            ХАУС ЗАХИАЛАХ <span className="font-semibold">ХҮСЭЛТ</span>
          </h1>
          <span className="bg_primary_color w-12 h-1 inline-block"></span>
        </div>
        <Box
          maxWidth={1200}
          display="flex"
          justifyContent={"center"}
          mt={4}
          className="fl-direction p-margin"
        >
          <Image
            src={"/img/agreement.svg"}
            width={110}
            height={122}
            alt="loan"
          />
          <Typography
            variant="body1"
            fontFamily={'"Montserrat", sans-serif'}
            maxWidth={700}
            px={4}
            color="#fff"
            lineHeight={2}
            sx={{
              width: {
                md: "500px",
                lg: "auto",
                sm: "400px",
              },
              textAlign: "justify",
              lineHeight: {
                lg: "2",
                md: "2",
                sm: "1.3",
              },
              fontSize: {
                xs: "0.813rem",
              },
            }}
          >
            Та манай “Homey Mortgage”-ээс өөрийн мөрөөдлийн амины орон сууцаа
            худалдан авах зээлд хамрагдах боломжтой эсэхээ доорх хүсэлтийг
            бөглөн шалгуулаарай. Хүсэлтийг илгээснээр манай зээлийн мэргэжилтэн
            тантай холбогдох болно.
          </Typography>
          <Link href="/">
            <a className=" my-auto">
              <BootstrapButton variant="contained">
                Хүсэлт илгээх
              </BootstrapButton>
            </a>
          </Link>
        </Box>
      </Box>
      <span className="absolute bg-black opacity-60 inset-0 z-10"></span>
    </Box>
  );
};
export default HeaderRequest;