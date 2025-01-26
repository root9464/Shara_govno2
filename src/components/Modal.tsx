import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader, Modal as ModalOverlay, useDisclosure } from '@heroui/react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Post } from '../App';

type FormValues = {
  title: string;
  body: string;
};

type ModalProps = {
  onCreatePost: Dispatch<SetStateAction<Post[] | null>>;
};

export const Modal = ({ onCreatePost }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onCreatePost((prev) => [...(prev ?? []), data]);
    reset();
  };

  return (
    <>
      <Button onPress={onOpen} className='fixed bottom-5 left-1/2 h-10 w-[calc(100%-2rem)] -translate-x-1/2 transform rounded-lg bg-blue-600 text-white'>
        Создать пост
      </Button>

      <ModalOverlay isOpen={isOpen} onOpenChange={onOpenChange} backdrop='transparent' placement='center'>
        <ModalContent className='w-[calc(100%-2rem)] rounded-3xl bg-blue-600/25 text-blue-600'>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className='flex flex-col gap-1'>Создайте пост</ModalHeader>
              <ModalBody>
                <div className='mb-4'>
                  <input
                    {...register('title', { required: 'Введите заголовок' })}
                    placeholder='Title'
                    className='w-full rounded-lg bg-white p-2 outline-none'
                  />
                  {errors.title && <p className='text-sm text-red-500'>{errors.title.message}</p>}
                </div>

                <div className='mb-4'>
                  <textarea
                    {...register('body', { required: 'Введите содержимое' })}
                    placeholder='Body'
                    className='w-full rounded-lg bg-white p-2 outline-none'
                  />
                  {errors.body && <p className='text-sm text-red-500'>{errors.body.message}</p>}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} className='rounded-lg bg-[#F31260] text-white'>
                  Отмена
                </Button>
                <Button type='submit' onPress={onClose} className='rounded-lg bg-white'>
                  Создать
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </ModalOverlay>
    </>
  );
};
