'use client';

import ErrorMessage from '@/app/components/ErrorMessage';
import Spinners from '@/app/components/Spinners';
import { createIssueSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

/**
 * SimpleMDE is a client side component, but since nextJS renders every component on the server side,
 * we need to disable the component to be rendered on the server side, and make sure it is rendered as a client side component
 * For this, we use dynamic function present inside next.
 */

const SimpleMDE = dynamic(
    () => import('react-simplemde-editor'),
    {ssr: false}
);

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = async () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="max-w-xl">
            {error && (
                <Callout.Root color="red" className='mb-5'>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form 
            className="space-y-3"
            onSubmit={handleSubmit(async (data) => {
                try {
                    setIsSubmitting(true);
                    await axios.post('/api/issues', data);
                    router.push('/issues');
                } catch (error) {
                    setIsSubmitting(false);
                    setError('An unexpected error occurred.');
                }
            })}>
                <TextField.Root placeholder='Title' {...register('title')}>
                    <TextField.Slot />
                </TextField.Root>
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
                <Controller
                    name="description"
                    control={control}
                    render={({field}) => <SimpleMDE placeholder="Description" {...field} />}
                />
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>
                <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && (<Spinners />)}</Button>
            </form>
        </div>
    )
}

export default NewIssuePage