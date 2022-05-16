import Banner from "./banner";
import More from "./icons/more";
import Rounded from "./rounded";

type Params = {
  title: string;
  data?: {
    poster: string;
    id: string;
  }[];
};

export default function Content({ title, data }: Params) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
      <p className="text-[16px] uppercase text-semibold text-[#B5B3CB] my-6">{title}</p>
      <Rounded><More /></Rounded>
      </div>
      <div className='flex space-x-4'>
        {data?.map((item) => (
          <Banner id={item.id} img={item.poster}></Banner>
        ))}
      </div>
    </div>
  );
}
