import Back from "./icons/back";
import Logo from "./icons/logo";
import Search from "./icons/search";
import Rounded from "./rounded";
import UserMenu from "./user-menu";

type Params = {
  back: boolean;
};

export default function Navbar({ back }: Params) {
  const goBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  
  return (
    <div className={`flex items-center pt-5 text-[16px] font-semibold justify-between px-24 ` }>
      {back && (
        <button onClick={goBack} className='flex items-center space-x-4'>
          <Back /> <span>VOLTAR</span>
        </button>
      )}

      <a href="/"><Logo /></a>
      {back && <a href='/login'>ENTRAR</a>}

      {!back && (
        <div className="flex item-center space-x-4">
      <Rounded><Search /></Rounded>
      <UserMenu />
      </div>
      )}
    </div>
  );
}
