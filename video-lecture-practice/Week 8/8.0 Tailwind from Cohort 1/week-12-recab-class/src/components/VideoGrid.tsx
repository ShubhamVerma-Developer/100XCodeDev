import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "photo.jpg",
    thumbImage: "thumbnail.jpg",
    author: "Raman singh",
    views: "100k",
    timestamp: "2 days go",
  },
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
