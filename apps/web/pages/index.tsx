import axios from "axios";
import { GetServerSidePropsContext } from "next";
import NavBar from "../components/navbar";
import Content from "../components/content";
import Footer from "../components/footer";
import { getGravatar } from "../utils/get-gravatar";
import Head from "next/head";

type Data = {
  id: string;
  poster: string;
};

type Result = {
  data?: {
    movies: Data[];
    tvshows: Data[];
  };
  error?: string;
};

export default function Index({ data, error }: Result) {
  if (error && typeof window !== "undefined") {
    window.location.pathname = "/choose";
  }

  return (
    <div className='bg-split divide-y-[1px] divide-[#48465B] space-y-2'>
      <Head>
        <title>Laon Streaming - Home</title>
      </Head>
      <NavBar back={false} />
      <div className='flex justify-center h-screen pt-8'>
        <div className='pt-10 max-w-screen-2xl'>
          <h1 className='text-[40px] text-white font-bold text-left'>
            Populares
          </h1>
          <Content title='Filmes' data={data?.movies as Data[]} />
          <Content title='Série' data={data?.tvshows as Data[]} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { data } = await axios.get("http://localhost:4001/movies", {
      headers: {
        Authorization: "Bearer " + context.req.cookies.token,
      },
    });

    return { props: { data } };
  } catch (err) {
    return { props: { error: (err as Error).message } };
  }
}
