import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../reuseables/pagination";
import { newsQuery, newSearchQuery } from "../../utils/data";
import { client } from "../../utils/client";

import { getFormattedDate } from "../../utils/common"; 

interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  mainImageUrl: string;
  _createdAt: string;
  body: string;
}


const News = () => {
  const [newsList, setNewList] = useState<NewInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useState({ page: 1, pageSize: 10, searchTerm: ''});

  
  const fetchNewsBySearch = () =>{
    const query = newSearchQuery(searchParams);
    
    client.fetch(query)
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }

  const fetchNews = () =>{
    client.fetch(newsQuery(searchParams))
    .then((data) => {
      setNewList(data);
      setLoading(false);
    })
  }
  
  useEffect(() => {
    setLoading(true);
    
    if(searchParams.searchTerm !== ''){
      fetchNewsBySearch();
    } else {
      fetchNews();
    }

    const countQuery = `count(*[_type == "post" && status == 'active' && type == 'news'])`

    client.fetch(countQuery)
    .then((data : number) => {
      setTotalPage(Math.ceil(data / searchParams.pageSize));
    })

    // eslint-disable-next-line
  }, [searchParams]);

  const onPageChange = (page: number) => {
    setSearchParams({...searchParams, page: page});
    fetchNewsBySearch();
  }

  const onPageSizeChange = (pageSize: number) => {
    setSearchParams({...searchParams, pageSize: pageSize});
    fetchNewsBySearch();
  }
  
  return (
    <div className='flex flex-col items-center gap-10 w-full'>
      <div className='grid grid-cols-1 items-center lg:grid-cols-2 mt-16 lg:mt-20 lg:w-8/12 w-11/12 relative'>
        <div className="flex flex-col gap-5">
            <p className="text-gray-500">~/blog</p>
            <div className="text-2xl lg:text-[2.25rem] lg:leading-[50px]">
              Keep up to date with the <br className="lg:block hidden"/> latest news about Sarathealthcare.
            </div>
            <div className='bg-white p-2 px-5 mt-5 text-sm flex flex-row items-center lg:w-1/2 w-3/4 font-inter border rounded-full text-center'>
              <input type="text" placeholder="Search for article" value={searchParams.searchTerm}
                  onChange={({ target}) => {setSearchParams({ ...searchParams, searchTerm: target.value })}} className='bg-transparent placeholder:text-black w-full outline-none'/>
              <i className="fi fi-rr-search scale-x-[-1] mb-[-.4rem]"></i>
            </div>
        </div>

      </div>

      <div className='flex flex-col items-center bg-white lg:w-8/12 w-11/12 z-30'>
        <div className='grid lg:grid-cols-2 w-full lg:gap-[4rem] gap-5 lg:mt-10 mt-5'>
          {!loading && newsList?.map((post, index) => (
            <NavLink to={`/updates/${post?._id}`} className='rounded-[4px] text-left h-full' key={post._id}>
              <div className="rounded-[4px] border">
                <img src={post?.mainImageUrl} className="lg:h-[30rem] w-full object-cover aspect-auto" alt={`news-${index}`} />
              </div>
              <div className='mb-2 mt-4 text-sm text-gray-500'>
                {getFormattedDate(post?._createdAt)}
              </div>
              <div className='text-xl font-medium hover:underline text-gray-800 group-hover:underline'>
                {post?.title}
              </div>
              <div className='mb-2 mt-4 font-inter text-sm leading-snug text-gray-600'>
                {post?.subtitle}
              </div>

              <div className=' mt-4 flex items-center gap-2  text-gray-500 text-sm'>
                Read more
                <i className="fi fi-rr-arrow-small-right mb-[-.3rem]"></i>
              </div>
            </NavLink>
          ))}
        </div>
        <div className={`${newsList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 items-center justify-center my-[5rem]`}>
          <div className='text-2xl  font-semibold mb-3'>No results found</div>
          <div className=''>Uh oh! It seems like we couldn't find any articles matching your search criteria at the moment. </div>
          <div className=''>Don't worry, our team is constantly updating our blog with fresh content. </div>
          <div className=''>Why not try a different search term or explore our blog categories to discover something new? Happy exploring!</div>
          {/* <div onClick={() => {setSearchParams({ ...searchParams, searchTerm: '' })}} className='text-white border py-3 px-10 lg:text-xl font-semibold cursor-pointer gap-2 mt-5 uppercase flex flex-row items-center'>
            <i className="fi fi-rr-angle-small-left mb-[-.3rem]"></i>
            Back to blog
          </div> */}
        </div>
      </div>


      <Pagination currentPage={searchParams.page} dataLength={newsList.length} pageSize={searchParams.pageSize} totalPages={totalPage} onPageSizeChange={onPageSizeChange} onPageChange={onPageChange} />
        
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

export default News;
