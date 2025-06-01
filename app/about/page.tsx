"use client"

import Header from "../(landing)/Header"

export default function About() {
    return (
        <>
            <Header />
            <section className="about-hero flex w-full h-[992px] bg-[#F4F1EB]">
                <div className="left-side">
                    <div className="w-[674px] h-[674px]">
                        <h1 className="text-[70px] leading-[120%] garamond-font font-semibold">Tailored Events for Every Occasion</h1>
                        <div>
                            <p className="tenor-font text-[17px] leading-[150%]">Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.</p>
                        </div>
                    </div>
                </div>
                <div className="right-side w-[60%]">
                    <h1>About</h1>
                </div>
            </section>
        </>
    )
}