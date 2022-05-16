type Params = {
  name: string;
};

export default function Tag({ name }: Params) {
  return (
    <span className='rounded-2xl border border-solid border-[#636177] min-w-[80px] text-center p-[5px]'>
      {name}
    </span>
  );
}
