type Video = {
  id: string;
  title: string;
  url: string;
  data: string;
};

function getVideo(id: string): Video {
  return {
    id,
    title: "video",
    url: "https://..",
    data: "byte-data..",
  };
}

type getVideoMetadata = Pick<Video, "id" | "title">;

// Pick<Video, 'id' | 'title'> == Video type에서 'id'와 'title' 만 이용할 것이다
function getVideoMetadata(id: string): Pick<Video, "id" | "title"> {
  return {
    id,
    title: "title",
  };
}
