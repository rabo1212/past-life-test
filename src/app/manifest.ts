import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "전생의 나 - 나의 전생은?",
    short_name: "전생테스트",
    description: "당신의 전생을 알아보세요. 10가지 질문으로 밝혀지는 당신의 전생 유형!",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0B1E",
    theme_color: "#7C3AED",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
