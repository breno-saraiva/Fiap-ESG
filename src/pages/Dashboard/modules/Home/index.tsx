import ecology from "../../../../img/ecology-green-svgrepo-com.svg";
import { Linkbutton } from "./components/LinkButton";

function Home() {
  return (
    <div>
      <section className="w-full flex flex-col justify-center items-center text-center p-8 md:p-16">
        <h1 className="mb-4 md:mb-8 text-3xl md:text-5xl font-sans font-bold px-0 py-[0.2em]">
          Bem-vindo ao{" "}
          <span className="bg-[#222] p-[0.2em]">
            <span className="text-[#22C55E]">Green</span>
            <span className="text-white">Tech.</span>
          </span>
        </h1>
        <p className="mb-4 md:mb-6 text-[#7b7b7b] text-sm md:text-base">
          Comece a gerenciar aos seus projetos agora mesmo!
        </p>
        <Linkbutton to="/newProject" text="Criar projeto" />
        <img src={ecology} alt="Costs" className="w-[250px] md:w-[350px] my-8 mx-0" />
      </section>
    </div>
  );
}

export default Home;
