import WeekCard from "./WeekCard";
import pro1 from "/ezgif-1-653365e272.gif";
import pro2 from "/ezgif-6-6cb265b36d (1).gif";
import pro3 from "/ezgif-6-e50c7394b1 (1).gif";
import pro4 from "/ezgif-6-2675c357dc.gif";
import pro5 from "/ezgif-6-dc88ca8cc4 (2).gif";
import pro6 from "/f3ba884c-6dac-47c9-8838-a9d6efc16f72.gif";

const Buildsection = () => {
  return (
    <div>
      <h1 className="text-center pt-12 text-white text-3xl md:text-4xl font-bold ">
        Our students projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8 pt-12">
        <WeekCard imgUrl={pro1} />
        <WeekCard imgUrl={pro2} />
        <WeekCard imgUrl={pro3} />
        <WeekCard imgUrl={pro4} />
        <WeekCard imgUrl={pro5} />
        <WeekCard imgUrl={pro6} />
      </div>
    </div>
  );
};

export default Buildsection;
