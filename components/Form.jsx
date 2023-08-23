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
        className='max-w-2xl w-full mt-10 flex flex-col gap-7 createPostForm'
      >
        <label>
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
        </label>
        <label>
        <span className='font-satoshi text-base text-gray-700 font-semibold'>
          Tag {` `}
          <span className='font-normal'>(#product #webdev)</span>
        </span>

        <input 
          value={post.tag}
          onChange={(e) => setPost({...post,
              tag: e.target.value
            })
          }
          placeholder='#tag'
          className='form_input'
        />
        </label>

        <div className='flex-end mr-3 mb-3 gap-4'>
          <Link href='/' className='text-sm text-gray-500'>
            Cancel
          </Link>

          <button 
            type='submit'
            disabled={submitting}
            className='text-sm px-3 py-1.5 bg-orange-500 rounded-full text-white'
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form