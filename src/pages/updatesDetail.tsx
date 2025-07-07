import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { postDetailQuery, newsDetailMoreQuery } from "../utils/data";
import { client } from "../utils/client";
import { getFormattedDate } from "../utils/common";
import { BlockText } from "../components/reuseables/blockContent";

interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  mainImageUrl: string;
  body: any[];
  _createdAt: string;
}


const NewsDetail = () => {
  const [postDetail, setPostDetail] = useState<NewInfo>({_id: "", title: "", duration: "", subtitle: "", body: [], _createdAt: "", mainImageUrl:""});
  const [postDetailMore, setPostDetailMore] = useState<NewInfo[]>([]);
  const {id} = useParams();

  useEffect(() => {    
    if(id){
      const getPostDetailquery = postDetailQuery(id);
    
      client.fetch(getPostDetailquery)
      .then((data) => {
        setPostDetail(data[0]);
      })

      const getMorePostquery = newsDetailMoreQuery(id);
    
      client.fetch(getMorePostquery)
      .then((data) => {
        setPostDetailMore(data);
      })
    }
    
  }, [id])
  

  return (
    <div className='flex flex-col items-center gap-10 w-full'>
      <div className='flex flex-col lg:w-8/12 w-11/12 pt-10 lg:pt-16'>
        <NavLink to={`/updates`} className='mt-4 flex items-center gap-2 text-gray-500 lg:text-sm text-xs'>
          <i className="fi fi-rr-arrow-small-left mb-[-.3rem]"></i>
          All Blogs
        </NavLink>
        <div className='flex flex-col w-full mt-10 lg:mt-20 my-20'>
          <div className='text-sm'>{getFormattedDate(postDetail?._createdAt)}</div>
          <div className={`mt-3 max-w-full text-2xl leading-normal md:mt-6 md:max-w-[860px] md:text-5xl md:!leading-[60px]`}>
            {postDetail?.title}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full border-y relative'>
        <div className='h-full flex flex-row justify-center lg:w-8/12 w-11/12'>
          <div className="flex lg:w-5/6 md:w-2/3 flex-col pb-16 md:pb-32 md:pr-16 lg:min-h-[75vh] md:border-r">
            <div className='flex flex-col gap-10 items-center w-full'>
              <img src={postDetail?.mainImageUrl} className="-mt-16 rounded-[4px]" alt={`news`} />
              <div className='w-full font-inter leading-relaxed text-gray-600'>
                <BlockText blocks={postDetail?.body} />
              </div>
            </div>
          </div>
          <div className="sticky top-[72px] hidden h-[calc(100vh-72px)] lg:w-1/4 md:w-1/3 max-w-[355px] flex-col items-start overflow-y-auto pb-8 pl-14 pt-16 scrollbar scrollbar-white md:flex">
            <div className="hidden md:block">
              <h5 className="mb-3 font-mono text-gray-700">Author</h5>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border">
                  </div>
                  <div className="text-left text-sm text-gray-700">
                    <h5 className="mb-0text-black font-semibold">Mark Ramotowski</h5>
                    <p className="m-0 font-mono text-sm text-gray-500">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col items-start border-t pt-6">
                <h5 className="test-base pr-3 font-mono text-gray-700">Try Sarathealthcare for free</h5>
                <p className="pt-2 text-sm text-gray-500 font-inter">No sampling. No hidden fees. <br/>All your event data, all the time. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col gap-5 justify-between items-start mt-10 lg:w-8/12 w-11/12'>
        <div className='flex flex-col w-full gap-3 lg:text-lg text-sm'>
          <div className='lg:text-[2.5rem] text-center text-2xl'>
            More posts
          </div>
          <div className='grid lg:grid-cols-3 lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
            {postDetailMore?.map((post, index) => (
              <NavLink to={`/updates/${post?._id}`} className='rounded-[4px] text-left h-full' key={post._id}>
                <div className="rounded-[4px] border">
                  <img src={post?.mainImageUrl} className="lg:h-[15rem] w-full object-cover aspect-auto" alt={`news-${index}`} />
                </div>
                <div className='mb-2 mt-4 text-sm text-gray-500'>
                  {getFormattedDate(post?._createdAt)}
                </div>
                <div className='text-xl font-medium hover:underline text-gray-800 group-hover:underline'>
                  {post?.title}
                </div>

                <div className=' mt-4 flex items-center gap-2  text-gray-500 text-sm'>
                  Read more
                  <i className="fi fi-rr-arrow-small-right mb-[-.3rem]"></i>
                </div>
              </NavLink>
            ))}
          </div>
          
        </div>
      </div>
      <div className="flex flex-col bg-pattern items-center w-full py-10 border-t">
        <div className="flex flex-col lg:items-center gap-3 lg:w-8/12 w-11/12 py-16">
          <div className="text-2xl lg:text-3xl !leading-[3rem] text-center lg:w-2/3">
            Our team can advise & implement the right solution to suit your
            needs
          </div>
          <p className="text-base mx-auto pt-2 text-center text-gray-500 lg:text-left">
            Data-driven success starts here
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail;
