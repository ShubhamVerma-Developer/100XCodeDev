import photo from "../../public/photo.png";
function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} className="rounded-xl"></img>
      <div className="grid grid-col-12 pt-2">
        <div className="col-span-1">
          <img
            className={"rounded-full w-20 h-20"}
            src={props.thumbImage}
          ></img>
        </div>
        <div className="col-span-11 pl-2">{props.title}</div>
        <div className="col-span-11 text-gray-400 text-base">
          {props.author}
        </div>
        <div className="col-span-11 text-gray-400 text-base">
          {props.timestamp}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
