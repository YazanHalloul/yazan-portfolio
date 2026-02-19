export const projects = [
  {
    title: "E-HealthCare Mobile Application",
    description:
      `A healthcare system composed of two mobile applications for doctors and patients.
       Patients can browse medical specialties, filter doctors by criteria such as age and gender,
       book appointments, send medical consultations, and communicate through real-time chat. 
      Doctors can manage schedules, respond to consultations, and handle patient interactions. Built using Flutter and ASP.NET Core with REST API integration.`,
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "ASP.NET Core" },
      { name: "REST APIs" },
      { name: "SQL Server" },
    ],
    image: "/E-health.png",
    links: [
      {
        type: "github",
        url: "https://github.com/YazanHalloul/E-HealthCare-Mobile-Application.git",
      },
      {
        type: "demo",
        url: "https://youtu.be/jAB7rhKwN4E",
      },
    ],
  },
  {
    title: "Generate MCQs from Image (AI System)",
    description:
      `An AI-driven system that generates structured multiple-choice questions from images
       using Vision-Language Models, and Large Language Models (LLMs).
       The system integrates prompt engineering and visual question answering,
       and was deployed within a web interface that enables question generation, 
       manual refinement, result storage, and interactive quiz attempts with scoring, simulating a real-world workflow.`,
    skills: [
      { name: "React"},
      { name: "Django" },
      { name: "MySQL" },
      { name: "Deep Learning" },
      { name: "LLMs" },
      { name: "Prompt Engineering" },
    ],
    image: "/mcq.png",
    links: [
      {
        type: "github",
        url: "https://github.com/YazanHalloul/Generate-Multiple-Choice-Questions-from-Image.git",
      },
      {
        type: "demo",
        url: "https://youtu.be/Bfdc92U_5tc",
      },
    ],
  },
];
