import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = ({ setIsSignedIn }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const auth = urlParams.get("auth");
  // console.log(auth);

  const updateURLParameter = () => {
    navigate(`/cart`);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const deleteUrlParamter = () => {
    setAnchorEl(null);
    if (auth) {
      searchParams.delete("auth");
      setSearchParams(searchParams);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem(
      "milky_express_user",
      JSON.stringify({
        name,
        email: "vivian@smartcomplyapp.com",
        password,
        provider: "none",
      })
    );
    setIsSignedIn(true);
    deleteUrlParamter();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[70%]">
      <h1 className="text-xl font-semibold mb-2">Login</h1>
      <p className="text-[#AAAAAA] text-sm">Login to complete your order</p>
      <input
        required
        type="email"
        onChange={(e) => setName(e.target.value)}
        placeholder="Email"
        className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto mt-10 mb-3"
      />

      <input
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passowrd"
        className="border border-[#BCBCBC] rounded-xl p-3 w-full flex-auto mt-3"
      />
      <button
        type="submit"
        className="flex flex-row mb-5 mt-7 font-semibold justify-center items-center gap-3 rounded-xl text-white p-3 bg-[#FF1A71] text-sm w-full"
      >
        Log in
      </button>

      <div className="w-full text-[#949494] text-sm text-center">
        <button onClick={updateURLParameter} className="underline font-bold">
          Continue with Google or Facebook
        </button>
      </div>
    </form>
  );
};

export default Login;
