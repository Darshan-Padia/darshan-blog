'use client';
import { getPostDetail } from "../../services";
import { useEffect , useState } from "react"; 
import {Author} from "../../components/Author";
import Categories from "../../components/Categories"
import RelatedOrRecents from "../../components/RelatedOrRecents";
import {Comments} from "../../components/Comments";
import {ArticleDetail} from "../../components/ArticleDetail";
import {CommentsForm} from "../../components/CommentsForm";
import {AdSection} from "../../components/AdSection";
const page = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
   
    useEffect(() => {
        const slug = window.location.pathname.split("/")[2];
        getPostDetail(slug)
        .then((res) => {
            setPost(res);
            // setComments(res.data.comments);
            setLoading(false);
        })
        .catch((err) => {
            setError(true);
            setLoading(false);
        });
    }, []);


    
    
    
    if (loading) {
        // returnning a div that will show loading on centre of the page
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-bold">Loading...</h1>
            </div>
        );
    }else{
        return (
            <main className=" 
            pr-5 pl-5 
            md:pl-16 md:pr-16
            sm:pl-12 sm:pr-12
            lg:pl-20 lg:pr-20
            ">
              <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row  w-full gap-28 justify-between " >
                <div className="searchAndArticles lg:max-w-none  w-full sm:max-w-sm md:max-w-xl  flex  flex-col gap-3 " >
                    <ArticleDetail post={post} />
                    <hr/>
                    <Author author={post.author} />
                    <hr/>
                    <CommentsForm />
                    <hr/>
                    <Comments slug={post.slug} />
                </div>
        
                <div className="sticky h-10 top-14 sm:flex md:flex lg:flex flex-col gap-3 w-2/5" >
                  <AdSection 
                 
                   /> 
                  <hr/>
                  <RelatedOrRecents 
                   categories={
                    post.categories.map((category) => {
                        return (
                            category.slug
                        )
                    })
                  }
                  slug={post.slug}
                   />
                </div>
              </div>
            </main>
          );
    }
    
}

export default page;