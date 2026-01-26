
import BlogCard from "@/components/modules/homepage/blogCard";
import { Button } from "@/components/ui/button";
import { blogServices } from "@/services/blog.services";
import { BlogPost } from "@/types";





export default async function Home() {
  const{data}= await blogServices.getBlog()
  // console.log(data)
  
  return (
   <div className="grid grid-cols-2 gap-4 mx-auto max-w-7xl px-2 ">
    {data?.data?.map((post:BlogPost)=><BlogCard key={post.id} post={post}></BlogCard>)}
   </div>
  );
}
