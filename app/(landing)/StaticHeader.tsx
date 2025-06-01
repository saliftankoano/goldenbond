"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function StaticHeader() {
    const [isEventsOpen, setIsEventsOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Close mobile menu when window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header className="relative bg-[#F4F1EB] shadow-sm px-4 md:px-6 py-4 lg:py-6">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Mobile: Logo on left */}
                    <div className="flex items-center hover:cursor-pointer lg:hidden">
                        <Link href="/">
                            <Image 
                                src="/images/logo.svg" 
                                alt="Golden Bond" 
                                width={72} 
                                height={71}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Layout */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        {/* Left Navigation */}
                        <div className="flex items-center space-x-8 tenor-font">
                            <Link
                                href="/about"
                                className="text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                            >
                                ABOUT
                            </Link>
                            <Link
                                href="/story-time"
                                className="text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                            >
                                STORY TIME
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                            >
                                PORTFOLIO
                            </Link>
                        </div>

                        {/* Centered Logo */}
                        <div className="flex items-center hover:cursor-pointer">
                            <Link href="/">
                                <Image 
                                    src="/images/yellow-logo.svg" 
                                    alt="Golden Bond" 
                                    width={72} 
                                    height={71}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </Link>
                        </div>

                        {/* Right Navigation */}
                        <div className="flex items-center space-x-8">
                            {/* Events Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsEventsOpen(!isEventsOpen)}
                                    className="flex items-center space-x-1 text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                                >
                                    <span>EVENTS</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isEventsOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isEventsOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-[#F4F1EB] backdrop-blur-sm border border-amber-200/20 shadow-lg z-50">
                                        <div className="py-2 uppercase tenor-font">
                                            <Link
                                                href="/events/corporate"
                                                className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                                                onClick={() => setIsEventsOpen(false)}
                                            >
                                                Corporate
                                                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                                            </Link>
                                            <Link
                                                href="/events/private"
                                                className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                                                onClick={() => setIsEventsOpen(false)}
                                            >
                                                Private
                                                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                                            </Link>
                                            <Link
                                                href="/events/popup"
                                                className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                                                onClick={() => setIsEventsOpen(false)}
                                            >
                                                Popup Events
                                                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/education"
                                className="text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                            >
                                EDUCATION
                            </Link>
                            <Link
                                href="/contact"
                                className="text-[16px] leading-[120%] font-light tracking-wider text-[#B58E5A] hover:text-amber-600 transition-colors"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-[#B58E5A] transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Click outside to close dropdown */}
                    {isEventsOpen && <div className="fixed inset-0 z-40" onClick={() => setIsEventsOpen(false)} />}
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-[#F4F1EB] flex flex-col">
                    {/* Header with logo and close button */}
                    <div className="flex items-center justify-between p-6">
                        <Link href="/">
                            <Image 
                                src="/images/logo.svg" 
                                alt="Golden Bond" 
                                width={60} 
                                height={59} 
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 text-[#B58E5A]"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8 tenor-font">
                        <Link
                            href="/about"
                            className="text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/story-time"
                            className="text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            STORY TIME
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            PORTFOLIO
                        </Link>
                        
                        {/* Events with dropdown in mobile */}
                        <div className="flex flex-col items-center space-y-4">
                            <button
                                onClick={() => setIsEventsOpen(!isEventsOpen)}
                                className="flex items-center space-x-2 text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            >
                                <span>EVENTS</span>
                                <ChevronDown className={`w-5 h-5 transition-transform ${isEventsOpen ? "rotate-180" : ""}`} />
                            </button>
                            
                            {isEventsOpen && (
                                <div className="flex flex-col items-center space-y-3">
                                    <Link
                                        href="/events/corporate"
                                        className="text-[#B58E5A] text-lg font-light tracking-wider hover:text-amber-600 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Corporate
                                    </Link>
                                    <Link
                                        href="/events/private"
                                        className="text-[#B58E5A] text-lg font-light tracking-wider hover:text-amber-600 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Private
                                    </Link>
                                    <Link
                                        href="/events/popup"
                                        className="text-[#B58E5A] text-lg font-light tracking-wider hover:text-amber-600 transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        Popup Events
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/education"
                            className="text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            EDUCATION
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#B58E5A] text-2xl font-light tracking-wider hover:text-amber-600 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            CONTACT
                        </Link>
                    </div>

                    {/* Plan My Event Button */}
                    <div className="p-6">
                        <Link
                            href="/plan-event"
                            className="block w-full bg-[#B58E5A] text-white text-center py-4 px-8 text-lg font-light tracking-wider hover:bg-amber-700 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            PLAN MY EVENT
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
} 