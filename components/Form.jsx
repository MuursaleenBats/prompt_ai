import React from 'react'
import Link from 'next/link';

const Form = ({
  type,
  post,
  submitting,
  setPost,
  handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text'>
        <span className='orange_gradient'>
          {type} Post
        </span>
      </h1>
      <p className='desc max-w-md'>
        {type} and share prompts with the world, and let your imagination run wild with any AI-Powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='max-w-2xl w-full mt-10 flex flex-col gap 7 glassmorphism'
      >
        <span className='font-satoshi text-base text-gray-700 font-semibold'>
          Your AI Prompt
        </span>

        <textarea 
          value={post.prompt}
          onChange={(e) => setPost({...post,
              prompt: e.target.value
            })
          }
          placeholder='Write Your Prompt Here...'
          className='form_textarea'
        />
      </form>
    </section>
  )
}

export default Form