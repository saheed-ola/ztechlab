import React from "react";
import { useParams } from "react-router-dom";

const services = [
  { id: "mobile-app-development", title: "Mobile App Development", content: "Develop IoT-enabled mobile apps for seamless interaction with smart devices, providing real-time monitoring, remote control, and analytics on both Android and iOS." },
  { id: "backend-development", title: "Backend Development", content: "Build robust and scalable backend systems to support your applications, ensuring high performance and reliability." },
  {
    id: "artificial-intelligence-solution",
    title: "Artificial Intelligence Solution",
    content: "Leverage AI and machine learning to create intelligent applications that can analyze data, recognize patterns, and make decisions."
  },
  { id: "embedded-system-development", title: "Embedded System Development", content: "Design and develop embedded systems for various applications, ensuring optimal performance and integration with hardware." },
  { id: "internet-of-things", title: "Internet of Things (IoT) Solution", video: "https://www.youtube.com/embed/4_8pcbtutGA", content: "Create IoT solutions that connect devices and enable data exchange, providing valuable insights and automation." },
  { id: "desktop-app-development", title: "Desktop App Development", content: "Build cross-platform desktop applications with a focus on user experience and performance." },
];

const ServiceId = () => {
  const { id } = useParams();
  const service = services.find((service) => service.id === id);

  return (
    <div className="container mx-auto p-6 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-semibold">{service.title}</h2>
        {service.video && (
            <iframe
            src={service.video}
            title={service.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full max-w-4xl mx-auto my-4"
            ></iframe>
        )}
      <p className="text-base">{service.content}</p>
    </div>
  );
};

export default ServiceId;
