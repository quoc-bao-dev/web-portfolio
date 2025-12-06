"use client";

import Container from "@/components/layouts/Container";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const tabs = [
  {
    label: "All",
    tab: "all",
  },
  {
    label: "Web",
    tab: "web",
  },
  {
    label: "Game",
    tab: "game",
  },
  {
    label: "UI Library",
    tab: "lib",
  },
];
const projects = [
  // {
  //   thumb: "/image/golden-spoon.png",
  //   title: "Golden Spoon",
  //   techStack: ["Next.js", "Tailwind", "SePay"],
  //   detail: {
  //     description:
  //       "Golden Spoons: eVoucher Marketplace\n\nTech Stack: Next.js, Tailwind CSS, TanStack Query.",
  //     features: [
  //       "Built the platform from scratch and implemented complex business logic.",
  //       "Integrated payment gateway and handled payment processing workflows.",
  //       "Managed large-scale data tables efficiently, ensuring smooth UI and performance.",
  //     ],
  //   },
  //   link: "https://golden-spoon-admin.vercel.app/",
  //   tags: ["web"],
  // },
  {
    thumb: "/image/theom.png",
    title: "The Om Lounge",
    techStack: ["Next.js", "Tailwind", "i18n"],
    detail: {
      description:
        "The Om Lounge là một nail spa cao cấp, mang đến trải nghiệm chăm sóc móng và thư giãn toàn diện cho khách hàng.",
      features: [
        "Thiết kế giao diện website sang trọng, phản ánh đẳng cấp của thương hiệu Nail Spa.",
        "Chức năng đặt lịch hẹn online dễ sử dụng, tối ưu trải nghiệm khách hàng.",
        "Tích hợp hệ thống giới thiệu dịch vụ, bảng giá và album sản phẩm thực tế.",
        "Responsive cho mọi thiết bị, đảm bảo hình ảnh sắc nét trên cả mobile, tablet và desktop.",
        "Sử dụng Next.js, Tailwind CSS để website vận hành nhanh, bảo trì dễ dàng và tối ưu SEO.",
      ],
    },
    link: "https://www.theomlounge.com",
    tags: ["web"],
  },

  {
    thumb: "/image/tebbi-ai.png",
    title: "Tebbi AI",
    techStack: ["Next.js", "Tailwind", "Langchain"],
    detail: {
      description:
        "AI-powered Travel Consultation Platform. A standalone product that utilizes AI to provide personalized travel advice to users.",
      features: [
        "Independently designed the system architecture and selected the technology stack.",
        "Developed a performant and scalable frontend using Next.js and Tailwind CSS.",
        "Implemented real-time chat functionality leveraging the OpenAI streaming API for seamless user interaction.",
        "Integrated TanStack Query and Zustand for state management and efficient data handling.",
        "Tech Stack: Next.js, Tailwind CSS, TanStack Query, Zustand, Lang Chain.",
      ],
    },
    link: "https://rovitravel.com/",
    tags: ["web"],
  },

  {
    thumb: "/image/m4u.png",
    title: "M4U",
    techStack: ["Next.js", "Tailwind", "Gsap"],
    detail: {
      description:
        "Korean Cosmetics Branding Website. Developed a modern platform to introduce and sell Korean cosmetics products, targeted for global markets including the UK, Korea, Thailand, China, and Vietnam.",
      features: [
        "Built frontend from scratch with defined code conventions and scalable source structure.",
        "Implemented core features: account management, review submission, and interactive components.",
        "Optimized SEO and multi-language support for diverse markets.",
        "Worked as part of a 4-member team.",
        "Tech Stack: Next.js, Tailwind CSS, TanStack Query, gsap.",
      ],
    },
    link: "https://maskforyou.vn/vi",
    tags: ["web"],
  },

  {
    thumb: "/image/nglearn.png",
    title: "Ng Learn",
    techStack: ["React.js", "Tailwind"],
    detail: {
      description:
        "Ng Learn is a platform for sharing programming knowledge and providing tools for developers, including cloud services and development tools.",
      features: [
        "Interactive tutorials with step-by-step guidance.",
        "Code examples for common use cases.",
        "Community forum for discussions and Q&A.",
        "Cloud services and tools for developers.",
        "Courses and knowledge sharing for developers.",
      ],
    },
    link: "https://nglearns.dev/",
    tags: ["web"],
  },
  {
    thumb: "/image/qyber.png",
    title: "Qyber",
    techStack: ["Typescript"],
    detail: {
      description:
        "Qyber is a powerful UI library designed to optimize the development of modern web applications with reusable and efficient components.",
      features: [
        "Core components including components, signals, and routing.",
        "Highly customizable and reusable components.",
        "Performance optimization and scalability.",
        "Detailed documentation and examples.",
      ],
    },
    link: "https://www.npmjs.com/package/qyber",
    tags: ["lib"],
  },
  {
    thumb: "/image/game.png",
    title: "Happy Bee",
    techStack: ["Javascript", "HTML", "CSS"],
    detail: {
      description:
        "Happy Bee is a simple and entertaining game where players control a bee to collect honey and avoid obstacles.The game is built using vanilla JavaScript, HTML, and CSS without relying on any external libraries or frameworks.",
      features: [
        "Simple and addictive gameplay.",
        "Friendly and cute graphic design.",
        "Suitable for all ages.",
      ],
    },
    link: "https://happy-bee.quocbaoart.com/",
    tags: ["game"],
  },
];

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    duration: 25,
  });

  const listProject =
    selectedTab === "all"
      ? projects
      : projects.filter((proj) => proj.tags.includes(selectedTab));

  const Tab = ({ label, tab }: { label: string; tab: string }) => {
    const handleClick = () => {
      setSelectedTab(tab);
    };
    return (
      <li
        className={cn(
          "flex items-center px-4 md:px-8 py-1 md:py-2 text-sm md:text-base rounded-full cursor-pointer",
          {
            "bg-primary-500 hover:bg-primary-400 text-white":
              tab === selectedTab,
            "hover:bg-primary-300 text-primary-600": tab !== selectedTab,
          }
        )}
        onClick={handleClick}
      >
        <p>{label}</p>
      </li>
    );
  };

  useEffect(() => {
    if (!emblaApi) return;

    let autoplay = setInterval(() => emblaApi.scrollNext(), 3000);

    emblaApi.on("pointerDown", () => clearInterval(autoplay)); // Dừng khi vuốt
    emblaApi.on("pointerUp", () => {
      autoplay = setInterval(() => emblaApi.scrollNext(), 3000); // Chạy lại sau khi vuốt
    });

    return () => clearInterval(autoplay);
  }, [emblaApi]);
  return (
    <section id="Project">
      <Container>
        <div className="py-24 min-h-screen">
          <h2 className="text-primary text-3xl text-center">Project</h2>
          <div className="mt-10">
            <ul className=" p-2 rounded-full bg-primary-100 flex gap-4 w-fit mx-auto">
              {tabs.map((item, index) => (
                <Tab key={index} label={item.label} tab={item.tab} />
              ))}
            </ul>
          </div>
          <div className="mt-10  w-full overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4 ">
              {listProject.map((proj) => (
                <div className="px-4 w-full md:w-1/3 shrink-0" key={proj.link}>
                  <ProjectCard
                    name={proj.title}
                    image={proj.thumb}
                    description={proj.detail.description}
                    feature={proj.detail.features}
                    link={proj.link}
                    techStack={proj.techStack}
                    title={proj.title}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
