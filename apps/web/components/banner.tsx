type Params = {
  img: string;
  id?: string;
};

export default function Banner({ img, id }: Params) {
  return (
    <>
      {id && (
        <a href={`/details/`+ id}>
          <img className='w-[184px] h-[264px]' src={img} />
        </a>
      )}

      {!id && <img className='w-[306px] h-[448px]' src={img} />}
    </>
  );
}
