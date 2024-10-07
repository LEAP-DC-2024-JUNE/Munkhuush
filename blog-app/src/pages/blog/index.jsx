import { BlogContainer, Footer, Header } from "@/components";
import { useState } from "react";

const Blog = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Header setInputValue={setInputValue} />
      <BlogContainer inputValue={inputValue} />
      <Footer />
    </div>
  );
};
export default Blog;
