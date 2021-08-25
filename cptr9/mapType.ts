type Video = {
  title: string;
  author: string;
};

[1, 2].map((item) => item * item); // [1, 4]

//mapType
type Optional<T> = {
  // [] == for...in =>maptype
  [P in keyof T]?: T[P];
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const video: ReadOnly<Video> = {
  title: "hi",
  author: "steve",
};

//video.author = 'ellie' // readonly를 선언해서 변경 불가능
type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  //Video type의 변수가 들어가도 되고 안들어가도되지만
  title: "steve", // string type
  // 새로운건 못들어감
  // animal :  // 이런 타입은 없음
};

//연습
type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
  title: null,
  author: null,
};
