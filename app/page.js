"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import react from "react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-col text-black h-[44vh] " >
        <div className="font-bold text-6xl flex gap-2 justify-center items-center " >Buy Me a Chai <span ><img width={88} src="/tea.gif" alt="" /></span> </div>
        <p>A crowd funding platform for creators. Get funded by your fans and followers.Start now!</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now!</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more!</button>
        </div>
      </div>

      <div className="bg-black h-1 opacity-10">
      </div>


      <div className="text-black container mx-auto  py-32 pt-14" >

        <h2 className="text-4xl font-bold text-center mb-14  " >Your Fans can buy you a Chai</h2>
        
        <div className="flex gap-5 justify-around" >

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/man.gif" alt="" />
            <p className="font-bold" >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/coin.gif" alt="" />
            <p className="font-bold" >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex justify-center flex-col items-center ">
            <img className=" bg-slate-400 rounded-full m-4 p-2" width={88} src="/group.gif" alt="" />
            <p className="font-bold" >Fund yourself</p>
            <p className="w-1/2 text-center" >Your Fans are available for you to help you</p>
          </div>

        </div>
      </div>
      <div className="bg-black h-1 opacity-10">
      </div>


      <div className="text-black container mx-auto py-32 pt-14 flex flex-col items-center justify-center " >

        <h2 className="text-4xl font-bold text-center mb-14 " >Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=r5-uPtCzC2941dsB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
