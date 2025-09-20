"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import react from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-col text-black h-[44vh] px-5 md:px-0 text-xs md:text-base " >
        <div className="font-bold md:text-6xl flex gap-2 justify-center items-center text-3xl " >Buy Me a Chai <span ><img className="invertImg" width={88} src="/tea.gif" alt="" /></span> </div>
        <p className="text-center md:text-left " >A crowd funding platform for creators to fund their projects</p>
        <p className="text-center md:text-left " >A place where your fans can buy you a chai. unleash the power of your fans and get your projects funded.</p>

        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here!</button>
          </Link>
          <Link href={"/about"} >
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more!</button>
          </Link>
        </div>
      </div>

      <div className="bg-black h-1 opacity-10">
      </div>


      <div className="text-black container mx-auto  pb-32 pt-14 px-10 text-center  " >

        <h2 className="text-4xl font-bold text-center mb-14  " >Your Fans can buy you a Chai</h2>

        <div className="flex gap-5 justify-around" >

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center " >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center " >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center " >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

        </div>
      </div>
      <div className="bg-black h-1 opacity-10">
      </div>


      <div className="text-black container mx-auto py-32 pt-14 flex flex-col items-center justify-center " >

        <h2 className="text-4xl font-bold text-center mb-14 " >Learn more about us</h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>


      </div>
    </>
  );
}
