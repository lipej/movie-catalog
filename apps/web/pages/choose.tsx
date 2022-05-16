import Head from "next/head";
import NavBar from "../components/navbar";

export default function Web() {
  return (
    <>
          <Head>
        <title>Laon Streaming</title>
      </Head>
      <NavBar back={true} />
      <div className="flex justify-center items-center h-screen">
        <a href="/signup" className="btn m-2">
          Cadastro
        </a>
        <a href="/login" className="btn m-2">
          Login
        </a>
      </div>
    </>
  );
}
