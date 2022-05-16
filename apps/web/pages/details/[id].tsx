import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import Tag from "../../components/tag";
import TextContent from "../../components/text-content";
import { getGravatar } from "../../utils/get-gravatar";

type Data = {
  data?: {
    poster: string;
    title: string;
    originalTitle: string;
    year: string;
    duration: string;
    tags: string[];
    resume: string;
    cast: string[];
    director: string;
    rating: string[];
    awards: string[];
  };
  error?: string;
};

export default function Details({ data, error }: Data) {
  if (error && typeof window !== "undefined") {
    return (window.location.pathname = "/choose");
  }

  return (
    <div className='bg-split divide-y-[1px] divide-[#48465B] space-y-2 leading-6'>
      <Head>
        <title>Laon Streaming - {data?.title}</title>
      </Head>
      <NavBar back={false} />
      <div className='flex justify-center h-screen pt-8'>
        <div className='flex space-x-20 pt-10 max-w-screen-2xl justify-between	'>
          <div className='space-y-4'>
            <Banner img={data?.poster as string} />
            <a className='btn hover:text-black hover:bg-white w-[306px] h-[56px] text-[16px] text-black bg-white font-bold text-left capitalize'>
              Assistir Trailer
            </a>
          </div>
          <div className='space-y-2'>
            <h1 className='text-[40px] font-semibold text-white'>
              {data?.title}
            </h1>
            <p className='font-normal text-[16px] text-[#B5B3CB] pt-8'>
              <span className='font-bold'>Titulo original: </span>
              {data?.originalTitle}
            </p>
            <p className='font-normal text-[16px] text-[#B5B3CB]'>
              <span className='font-bold'>Ano: </span>
              {data?.year}
            </p>
            <p className='font-normal text-[16px] text-[#B5B3CB]'>
              <span className='font-bold'>Duração: </span>
              {data?.duration}
            </p>
            <div className='flex space-x-2 py-4'>
              {data?.tags?.map((tag) => (
                <Tag name={tag} />
              ))}
            </div>
            <div className='flex flex-col max-w-[792px] space-y-8 pt-20'>
              <TextContent title='Sinopse' text={data?.resume as string} />
              <div className='flex space-x-4 '>
                <TextContent
                  title='Elenco'
                  text={data?.cast?.join(",") as string}
                />
                <TextContent
                  title='Prêmios'
                  text={data?.awards?.toString() as string}
                />
              </div>
              <div className='flex space-x-4'>
                <TextContent title='Diretor' text={data?.director as string} />
                <TextContent
                  title='Avaliações'
                  text={data?.rating?.join("\n") as string}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { data } = await axios.get(
      "http://localhost:4001/movie?id=" + context.params?.id,
      {
        headers: {
          Authorization: "Bearer " + context.req.cookies.token,
        },
      }
    );

    return { props: { data } };
  } catch (err) {
    return { props: { error: (err as Error).message } };
  }
}
