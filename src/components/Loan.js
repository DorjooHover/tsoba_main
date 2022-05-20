import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightAlt, AccountBalance } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

const Loans = () => {
  return (
    <Box sx={{ maxWidth: "1300px", margin: "90px auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mb={8}
      >
        <Title
          subtitle={"Зээлийн мэдээлэл"}
          title={"Гадаадад оршин суугаа харилцагчдад"}
        />
        <Box sx={{ width: "50%", display: "block", textAlign: "end" }}>
          <Link href={"/request"}>
            <a className="px-12 py-6 text-white font-semibold uppercase whitespace-nowrap bg_color inline tracking-widest items-center request_btn">
              Зээлийн хүсэлт илгээх
              <ArrowRightAlt sx={{ marginLeft: "1rem" }} />
            </a>
          </Link>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
          >
            <AccountBalance
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              Credit Repair
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              accusamus assumenda sequi maxime amet! Inventore.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
          >
            <AccountBalance
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              Credit Repair
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              accusamus assumenda sequi maxime amet! Inventore.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
          >
            <AccountBalance
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              Credit Repair
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              accusamus assumenda sequi maxime amet! Inventore.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
          >
            <AccountBalance
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              Credit Repair
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              accusamus assumenda sequi maxime amet! Inventore.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Loans;
