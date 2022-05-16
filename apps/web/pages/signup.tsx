import { useForm } from "react-hook-form";
import Input from "../components/input";
import NavBar from "../components/navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

type FormData = {
  password: string;
  name: string;
  email: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("http://localhost:4001/user", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Cadastro realizado com sucesso, cheque seu e-mail");

      setTimeout(() => window.location.replace("/"), 2000);
    } catch (e) {
      toast.error("Cadastro falhou =[ cheque os dados e tente novamente!");
    }
  };

  return (
    <>
          <Head>
        <title>Laon Streaming - Signup</title>
      </Head>
      <NavBar back={true} />
      <Toaster />
      <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center items-center h-screen w-[588px] h-[634px] bg-[#282639] text-[#B5B3CB]'>
          <form
            className='flex flex-col space-y-5 max-w-[384px]'
            onSubmit={handleSubmit(onSubmit as any)}
          >
          <h1 className='text-[22px] font-semibold text-white'>Cadastre-se</h1>
          <span className='text-[16px] font-normal'>Acompanhe os melhores filmes e séries.</span>

            <Input
              register={register("name", { required: true, minLength: 5 })}
              prop='name'
              placeholder='Nome Completo'
              error={
                errors.name ? "Por favor entre com o seu nome completo" : null
              }
              name='nome'
            />
            <Input
              register={register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              prop='email'
              placeholder='Email'
              name='e-mail'
              type='email'
            />
            <Input
              register={register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/,
              })}
              prop='password'
              name='senha'
              placeholder='Senha'
              type='password'
            />

            <p className="text-[12px]">Ao clicar em <span className="text-bold">cadastrar</span>, você está aceitando os Termos e Condições e a Política de Privacidade da Laon.</p>

            <input className='btn w-[384px] min-h-[72px] bg-white text-black capitalize hover:bg-white hover:text-black'               type='submit'
              value='Cadastrar'/>
          </form>
        </div>
      </div>
    </>
  );
}
