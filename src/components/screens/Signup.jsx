import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsSignedIn }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const auth = urlParams.get("auth");
  // console.log(auth);
  const navigate = useNavigate();

  const updateURLParameter = () => {
    navigate(`/cart`);
  };

  return (
    <div className="w-full md:w-[70%]">
      <h1 className="text-xl font-semibold mb-2">Sign Up</h1>
      <p className="text-[#AAAAAA] text-sm">Sign up to get started</p>
      <input
        type="email"
        placeholder="Email"
        className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto mt-10 mb-3"
      />

      <input
        type="password"
        placeholder="Passowrd"
        className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto mt-3"
      />

      <input
        type="tel"
        placeholder="Phone"
        className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto mt-3"
      />
      <button className="flex flex-row mb-5 mt-7 font-semibold justify-center items-center gap-3 rounded-xl text-white p-3 bg-[#FF1A71] text-sm w-full">
        Sign up
      </button>

      <div className="w-full text-[#949494] text-sm text-center font-openSans">
        <button onClick={updateURLParameter} className="underline font-bold">
          Continue with Google or Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUp;
