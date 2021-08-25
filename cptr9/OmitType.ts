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

type getVideoMetadata = Omit<Video, "id" | "title">;

// Omit<Video, 'id' | 'title'> == Video type에서 'id'와 'title' 뺀 나머지만 이용할 것이다 => url 와 data만 쓸것이다
function getVideoMetadata(id: string): Omit<Video, "id" | "title"> {
  return {
    data: "data",
    url: "url",
  };
}

//그  외
//Utilittype
