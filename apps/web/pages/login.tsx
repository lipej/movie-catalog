import { useForm } from "react-hook-form";
import Input from "../components/input";
import NavBar from "../components/navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setCookies } from "cookies-next";
import Head from "next/head";

type LoginData = {
  email: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: LoginData) => {
    try {
      const result = await axios.post("http://localhost:4001/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Login Realizado! Aguarde o redirecionamento!");

      setCookies("token", result.data.token);
      window.localStorage.setItem("gravatarHash", result.data.hash as string);

      setTimeout(() => window.location.replace("/"), 2000);
    } catch (e) {
      toast.error("Ops! =[ Login falhou");
    }
  };

  return (
    <>
      <Head>
        <title>Laon Streaming - Login</title>
      </Head>
      <NavBar back={true} />
      <Toaster />
      <div className='flex justify-center items-center h-screen'>
        <div className='flex justify-center items-center h-screen w-[588px] h-[634px] bg-[#282639] text-[#B5B3CB]'>
          <form
            className='flex flex-col space-y-5 max-w-[384px]'
            onSubmit={handleSubmit(onSubmit as any)}
          >
            <div className='mb-8'>
              <h1 className='text-[22px] font-semibold text-white'>Entrar</h1>
              <span className='text-[16px] font-normal'>
                Bem vindo(a) de volta!
              </span>
            </div>
            <Input
              register={register("email", { required: true })}
              prop='email'
              type='email'
              error={errors.name ? "Por favor entre com o seu usuário" : null}
              name='usuário'
            />
            <Input
              register={register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/,
              })}
              prop='password'
              name='senha'
              type='password'
            />

            <input
              className='btn w-[384px] min-h-[72px] bg-white text-black capitalize hover:bg-white hover:text-black'
              type='submit'
              value='Entrar'
            />
          </form>
        </div>
      </div>
    </>
  );
}
