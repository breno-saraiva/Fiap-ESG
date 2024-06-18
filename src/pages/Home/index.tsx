import { Linkbutton } from "./components/LinkButton";
import savings from "../../img/savings.svg";

function Home() {
  return (
    <div>
      <section className="w-full flex flex-col justify-center items-center text-center p-16">
        <h1 className="mb-8 text-5xl font-sans font-bold px-0 py-[0.2em]">
          Bem-vindo ao{" "}
          <span className="text-[#FFBB33] p-[0.2em] bg-[#222]">Cost</span>
        </h1>
        <p className="mb-6 text-[#7b7b7b]">
          comece a gerenciar aos seus projetos agora mesmo!
        </p>
        <Linkbutton to="/newProject" text="Criar projeto" />
        <img src={savings} alt="Costs" className="w-[350px] my-8 mx-0" />
      </section>
    </div>
  );
}

export default Home;
