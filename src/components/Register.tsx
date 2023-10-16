const Register = () => {
  return (
    <div>
      <h2 className="my-16 text-base md:text-2xl"> Login/Register</h2>
      <form
        action="login"
        className="mt-12 flex flex-col items-start w-60 md:w-80 gap-4"
      >
        <input
          type="text"
          className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Game name"
        />
        <input
          type="email"
          autoComplete="email"
          className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Email address"
        />
        <input
          type="text"
          className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Password"
        />
        <input
          type="text"
          className="block w-full rounded border-2 p-1.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          placeholder="Repeat password"
        />
      </form>
    </div>
  );
};

export default Register;
