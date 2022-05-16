import Back from "./icons/back";
import Logo from "./icons/logo";
import Search from "./icons/search";
import Facebook from "./icons/social/facebook";
import Twitter from "./icons/social/twitter";
import Youtube from "./icons/social/youtube";
import Rounded from "./rounded";
import UserMenu from "./user-menu";

type Params = {
  back: boolean;
  hash?: string;
};

export default function Footer() {
  return (
    <div
      className={`flex items-center py-5 text-[16px] font-semibold justify-between px-24 `}
    >
      <Logo />
      <div className='space-x-6 font-normal text-[14px] font-[#B5B3CB]'>
        <a>Inicio</a>
        <a>Entre ou Cadastre</a>
        <a>Termos e Condições</a>
        <a>Politica de Privacidade</a>
        <a>Ajuda</a>
      </div>
      <div className="flex space-x-2">
        <Rounded><Facebook /></Rounded>
        <Rounded><Twitter /></Rounded>
        <Rounded><Youtube /></Rounded>

      </div>
    </div>
  );
}
