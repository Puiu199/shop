export default function NavBar() {
    return (
        <nav className="flex py-5  px-2 mx-36">
            <div className="size-14">Logo</div>
            <ul className=" flex size-14 grow bor">
            <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer"><a href=""></a>Home</li>
            <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer"><a href=""></a>AboutUs</li>
            <li className="text-blue-500 hover:text-blue-800 mx-5 cursor-pointer"><a href=""></a></li>  </ul>
            <div className=" flex-none">
                <ul className="flex ">
                    <li className="w-9"><img src="src/assets/img/icons/authenticity.png" alt=""/></li>                    
                    <li className="w-9 "><img src="src/assets/img/icons/sign-up.png" alt="" /></li>
                </ul>
            </div>
        </nav>
    )
}