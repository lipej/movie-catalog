type Params = {
  children: JSX.Element
};

export default function Rounded({ children }: Params) {
  return (
    <div className='flex justify-center items-center w-[32px] h-[32px] rounded-full border-solid border-[1px] border-[#636177]'>
      {children}
    </div>
  );
}
