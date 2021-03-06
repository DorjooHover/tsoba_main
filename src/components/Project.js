import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import HeaderTitle from "./Header_title";
const Projects = () => {
  return (
    <Box mx="auto" py={"90px"} maxWidth={1200}>
      <HeaderTitle first_text={"САНАЛ БОЛГОХ"} last_text={"ХАУС ХОТХОН"} />
      <div className="grid grid-cols-1 mt-8 gap-20 p-3 project">
        <iframe
          width="853"
          height="700"
          src="https://my.matterport.com/show/?m=bndY2be9AZj"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
        {/* <div className="project_item_1">
          <div className=" mb-6 relative ">
            <Image
              src={"/img/extra/kh4cover.jpg"}
              alt="project"
              layout="responsive"
              width={384}
              height={256}
            />
          </div>
          <div className="flex px-4 justify-between items-center ">
            <h2 className="text-2xl font-semibold ">Хадат Вилла 4</h2>
            <Link href={"/project"}>
              <button className="uppercase text-sm tracking-widest font-medium border-b-2">
                цааш
              </button>
            </Link>
          </div>
        </div> */}
        {/* <div className="project_item_2">
          <div className=" mb-6 relative">
            <Image
              src={"/img/project/kh2.jpg"}
              alt="project"
              layout="responsive"
              width={384}
              height={256}
            />
          </div>
          <div className="flex px-4 justify-between items-center ">
            <h2 className="text-2xl font-semibold ">Хадат Вилла 2</h2>
            <Link href={"/project/khadat-villa-2"}>
              <button className="uppercase text-sm tracking-widest font-medium border-b-2">
                цааш
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </Box>
  );
};

export default Projects;
