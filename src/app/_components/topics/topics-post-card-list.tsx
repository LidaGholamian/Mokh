import { TopicPostCard } from "./topic-post-card";
import { TopicsType } from "../types/topics.type";

const posts: TopicsType[] = [
  {
    id: 1,
    title: "مهارت",
    image: "/image/maharat.png",
  },
  {
    id: 2,
    title: "درسی",
    image: "/image/dars.png",
  },
  {
    id: 3,
    title: "تکنولوژی",
    image: "/image/tech.png",
  },
  {
    id: 4,
    title: "زبان",
    image: "/image/zaban.png",
  },
  {
    id: 5,
    title: "ورزش",
    image: "/image/sport.png",
  },
  {
    id: 6,
    title: "هنر",
    image: "/image/honar.png",
  },
];

export const TopicsPostCardList: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 mt-10 container">
        {posts.map((post) => (
          <TopicPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
          />
        ))}
      </div>
      {/* <div className=" grid grid-cols-3 gap-10 mt-10">
        {posts.map((post) => (
          <TopicPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
          />
        ))}
      </div> */}
    </>
  );
};
