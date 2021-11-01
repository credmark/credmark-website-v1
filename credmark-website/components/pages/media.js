import MediaCard from "../media/mediaCard";
import moment from "moment";
import React from "react";

export default function Media({ posts }) {
  // Uncomment all the "UNCOMMENT ME"s to use filtering

  // UNCOMMENT ME
  /*const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category.slug.current === selectedCategory)
      );
    }
  }, [selectedCategory]);*/

  return (
    <main className="max-w-full flex-1 overflow-y-auto focus:outline-none rounded-md mediaBackground">
      <div>
        <div className="pt-20">
          <div>
            <h1 className="text-center credmark text-4xl lg:text-5xl border-b-2 border-black max-w-2xl block m-auto mx-10 md:m-auto">
              IN THE MEDIA
            </h1>
          </div>
          {// UNCOMMENT ME
          /*<div className="mx-10 max-w-2xl md:m-auto flex justify-around">
              <button onClick={()=>{setSelectedCategory("all")}}>All</button>
              <button onClick={()=>{setSelectedCategory("press")}}>Press</button>
              <button onClick={()=>{setSelectedCategory("announcements")}}>Announcements</button>
              <button onClick={()=>{setSelectedCategory("new-features")}}>New Features</button>
          </div>*/}
          <div className="block m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-2xl m-auto">
              {posts.map((post) => (
                <MediaCard
                  key={post.slug}
                  link={post.url}
                  img={post.mainImage}
                  alt={post.mainImageAlt}
                  title={post.title}
                  description={post.subtitle}
                  date={moment(post.publishedAt).format("MMMM Do, Y")}
                />
              ))}
              {// UNCOMMENT ME
              /*filteredPosts.map((post) => (
                <MediaCard
                  key={post.slug}
                  link={post.url}
                  img={post.mainImage}
                  alt={post.mainImageAlt}
                  title={post.title}
                  description={post.subtitle}
                  date={moment(post.publishedAt).format("MMMM Do, Y")}
                />
              ))*/}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
