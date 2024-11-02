import { type SyntheticEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import Send from '../icons/Send';
import Message from '../icons/Message';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedContainer } from './AnimatedContainer';
import { createPortal } from 'react-dom';

function Form() {
  const formRef = useRef<null | HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [body, setBody] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setBody(document.body);
  }, []);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_e9w0kwi',
        'template_yc9r5a7',
        formRef.current as HTMLFormElement,
        'XE6Ik-xKdueAIp44K'
      )
      .then(
        (result) => {
          toast.success('Your message was send');
        },
        (error) => {
          toast.error('Somthing went wrong. Try Again!');
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <AnimatedContainer delay={0.2 * 6} className='col-span-3 '>
      <Toaster position='top-center' richColors theme='dark' />
      <Message openForm={setIsOpen} />
      {body &&
        createPortal(
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.15 } }}
                key={'form-overlay'}
                className='fixed p-10  flex place-content-center items-center inset-0 z-50 backdrop-blur-xl'
              >
                <motion.form
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{
                    opacity: 0,
                    translateY: 50,
                    transition: { delay: 0, duration: 0.1 }
                  }}
                  transition={{ ease: 'backInOut', delay: 0.1 }}
                  ref={formRef}
                  onSubmit={(e) => sendEmail(e)}
                  className=' bg-background rounded-lg border-border max-w-xl p-6 w-full flex items-center place-content-center flex-col space-y-4'
                >
                  <div className='max-w-xs md:max-w-md w-full flex flex-col gap-2 text-xs opacity-50 relative'>
                    <label>Hey! send me a message</label>
                    <textarea
                      defaultValue=''
                      required
                      rows={10}
                      name='message'
                      autoComplete='off'
                      placeholder="Let's talk!"
                      className='outline-none focus:border-primary border border-border bg-transparent  w-full p-6  transition-colors  rounded-lg ease-in-out text-sm font-normal text-inherit  peer'
                    />
                  </div>
                  <div className='flex w-full items-center place-content-end px-4'>
                    {' '}
                    <button
                      type='button'
                      onClick={() => setIsOpen(false)}
                      className='hover:underline px-6 hover:text-red-600 transition-colors ease-in-out p-1 text-sm '
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='rounded-lg h-10 p-1 px-6 transition-colors ease-in-out bg-primary text-sm text-white '
                    >
                      Send
                    </button>
                  </div>
                </motion.form>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          body
        )}
    </AnimatedContainer>
  );
}
export default Form;
