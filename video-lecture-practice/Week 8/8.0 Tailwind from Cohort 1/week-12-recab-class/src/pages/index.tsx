import { AppBar } from "@/components/AppBar";
import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid />
    </div>
  );
}
