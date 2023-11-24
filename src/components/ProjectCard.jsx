/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ProjectCard({ title, image, link }) {
  return (
    <>
      <Link to={link}>
        <div className="relative flex h-[350px] flex-col gap-1 rounded-lg glass2  shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl md:h-[420px]">
          <img src={image} alt="project" className="h-1/2 rounded-lg" />
          <h2 className="text-center text-2xl py-20">{title}</h2>
        </div>
      </Link>
    </>
  );
}
