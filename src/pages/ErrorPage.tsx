const ErrorPage = () => {
    return (
        <div className="relative min-h-screen bg-[url(src/assets/img/error.png)] bg-cover bg-center">
            <h1 className=" absolute text-4xl sm:text-8xl ml-16  mt-36  font-extrabold text-white mb-4 leading-tight">
                Houston we've lost the page
            </h1>
            <img src="src/assets/img/4.png" className=" absolute ml-36  mt-76  " />
            <img src="src/assets/img/4.png" className=" absolute ml-270  mt-76  " />
        </div>
    );
};

export default ErrorPage;
