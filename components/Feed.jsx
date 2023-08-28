'use client'
import {useState, useEffect} from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return(
    <div className='mt-16 prompt_layout'>
      {
        data.map((post) => (  
          <PromptCard 
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('api/prompt');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  const handleSearchChange = (searchVal) => {
    setSearchText(searchVal);
    const filteredData = posts.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredPosts(filteredData)
};
const handleTagClick = (tag) => {
  setSearchText(tag);
  const filteredData = posts.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
  })
  setFilteredPosts(filteredData);
};

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='Search a tag or username'
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          className='search_input peer'
        />
      </form>      
    {
      searchText ? (
        <PromptCardList 
        data = {filteredPosts}
        handleTagClick = {handleTagClick}
      />
      ) : (
        <PromptCardList 
        data = {posts}
        handleTagClick = {handleTagClick}
      />
      )
    }
    </section>
  )
}

export default Feed