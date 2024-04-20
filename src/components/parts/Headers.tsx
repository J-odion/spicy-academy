import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { NavigationMenus } from "@/components/parts/Menus";

export default function Headers() {
    return (
        <div className='fixed bg-none flex w-full items-center h-[50px] align-middle justify-between px-[100px] py-[50px]'>
            <Image className="h-[50px] w-[50px]"
                src="/SGALOGO.svg"
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <NavigationMenus  />
            <div className="bg-none z-99 font-[400] text-[14px] text-white gap-8 flex items-center ">
            <a>Login</a>
            <Button className="bg-brown h-[35px] w-[auto] rounded-2xl p-[15px] text-[14px] items-center justify-center">Join Now</Button>
            </div>
        </div>
    )
}
