'use client'

import {useEffect, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';

const UpdatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',   
    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    useEffect(()=>{
        const getPromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptId}`);

            const data = await res.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag
            });
        }

        if(promptId) getPromptDetails(); 
        console.log(post);
    },[promptId])

    const updatePrompt = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      if(!promptId) alert('Prompt ID not found');

      try {
        const res = await fetch(`/api/prompt/${promptId}`, {
          method: "PATCH",
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag
          }),
        });

        if(res.ok){
          router.push('/')
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    }

  return (
    <Form 
        type = "Update"
        post = {post}
        submitting = {submitting}
        setPost = {setPost}
        handleSubmit = {updatePrompt}
    />
  )
}

export default UpdatePrompt;