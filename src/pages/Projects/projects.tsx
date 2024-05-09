import ServiceCard from "@/components/card";
import CenteredLayout from "@/components/centeredLayout";
import FormSection from "@/components/formSection";
import Header from "@/components/header";
import TitleComponent from "@/components/titleComponent";
import { Code, Globe, HardDrive } from "lucide-react";

function Projects() {
  return (
    <CenteredLayout>
      <Header />

      <div className="p-6">
        <TitleComponent title="O que fazemos" />
        <div className="grid grid-cols-2 gap-10 max-md:flex max-md:flex-col">
          <p className="font-medium text-zinc-200 text-left p-1">
            A presença da tecnologia no cotidiano das pessoas é cada vez mais
            notável. <br />
            <br />
            Nossos celulares estão presentes em praticamente todos os momentos
            do nosso dia, proporcionando-nos informação, entretenimento,
            praticidade e até mesmo conexões interpessoais.
            <br /> <br />
            No ambiente empresarial, a situação não é diferente. A tecnologia
            possibilita que as empresas se tornem mais ágeis e aprimorem seus
            produtos e serviços.
          </p>

          <ServiceCard
            icon={HardDrive}
            title="Manutenção de Sistemas"
            description="Oferecemos serviços de manutenção para sistemas web, incluindo otimização de desempenho, suporte técnico e atualizações de conteúdo. Garantimos que seu site ou aplicativo funcione sem problemas, permitindo que você se concentre no crescimento do seu negócio."
          />

          <ServiceCard
            icon={Code}
            title="Desenvolvimento de sites e app"
            description="Nós oferecemos um serviço especializado para desenvolvimento de sistemas e aplicativos. Criamos websites e aplicativos completos e dinâmicos, com designs personalizados para atender às suas necessidades específicas."
          />

          <ServiceCard
            icon={Globe}
            title="Acessória em tecnologia"
            description="Nós oferecemos um serviço especializado em consultoria em tecnologia. Prestamos assessoria abrangente para diversas áreas da tecnologia, auxiliando empresas a tomar decisões estratégicas e implementar soluções inovadoras."
          />
        </div>
      </div>

      <FormSection />
    </CenteredLayout>
  );
}

export default Projects;
