import Logo from '../assets/logo.svg';

export const Header = () => (
  <header className='m-auto flex w-[calc(100%-2rem)] flex-row items-center gap-2.5 rounded-3xl bg-blue-600 p-1 text-white'>
    <img src={Logo} alt='logo' className='h-10 w-10' />
    <p className='text-xl font-medium'>Reddit clone</p>
  </header>
);
