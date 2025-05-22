'use client'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B0E01] p-4 tenor-font px-[115px] py-[120px] w-full max-h-[468px]">
        <div className="footer-core max-w-[1210px] flex justify-between">
            <div className="footer-core-left">
                <div className="footer-brand">
                    <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                </div>
                <div className="address max-w-[196px] mt-4 text-white">
                    <p>731 Walker Road, Suite F, Great Falls, VA 22066</p>
                </div>
                <div className="socials max-w-[192px] mt-4 flex gap-6">
                    <Image src="/images/yt.svg" alt="socials" width={24} height={24} />
                    <Image src="/images/ig.svg" alt="socials" width={24} height={24} />
                    <Image src="/images/fb.svg" alt="socials" width={24} height={24} />
                    <Image src="/images/tt.svg" alt="socials" width={24} height={24} />
                </div>
            </div>
            <div className="footer-core-right flex gap-[44px]">
                <div className="links-1">
                    <Link href="/education" >
                        <p className="text-[#FBD6A4] pb-[38px]" >Education</p>
                    </Link>
                    <Link href="/portfolio" >
                        <p className="text-[#B58E5A]">Portfolio</p>
                    </Link>
                </div>
                <div className="links-2">
                    <Link href="/events" >
                        <p className="text-[#FBD6A4] pb-[38px]">Events</p>
                    </Link>
                    <Link href="/private-parties" >
                        <p className="text-[#B58E5A] pb-[12px]">Private Parties</p>
                    </Link>
                    <Link href="/corporate-events" >
                        <p className="text-[#B58E5A] pb-[12px]">Corporate Events</p>
                    </Link>
                    <Link href="/pop-up-events" >
                        <p className="text-[#B58E5A] pb-[12px]">Pop-Up</p>
                    </Link>
                </div>
                <div className="links-3">
                    <Link href="/resources" >
                        <p className="text-[#FBD6A4] pb-[38px]">Resources</p>
                    </Link>    
                    <Link href="/home" >
                        <p className="text-[#B58E5A] pb-[12px]">Home</p>
                    </Link>
                    <Link href="/story-time" >
                        <p className="text-[#B58E5A] pb-[12px]">Story Time</p>
                    </Link>
                    <Link href="/about" >
                        <p className="text-[#B58E5A]">About</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom mt-[70px]">
            <p className="text-center text-[#FBD6A4]">Copyright © 2025, Golden Bond. All rights reserved. </p>
        </div>
    </footer>
  );
}

{/* Ensure responsive design for footer on mobile and tablet */}