import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [isInformasiDropdownOpen, setInformasiDropdownOpen] = useState(false);
    const [isDemografisDropdownOpen, setDemografisDropdownOpen] = useState(false);
    const [isKatalogDropdownOpen, setKatalogDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const profileRef = useRef(null);
    const informasiRef = useRef(null);
    const demografisRef = useRef(null);
    const katalogRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
            if (informasiRef.current && !informasiRef.current.contains(event.target)) {
                setInformasiDropdownOpen(false);
            }
            if (demografisRef.current && !demografisRef.current.contains(event.target)) {
                setDemografisDropdownOpen(false);
            }
            if (katalogRef.current && !katalogRef.current.contains(event.target)) {
                setKatalogDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Reset all states when the route changes
        setProfileDropdownOpen(false);
        setInformasiDropdownOpen(false);
        setDemografisDropdownOpen(false);
        setKatalogDropdownOpen(false);
        setMobileMenuOpen(false);
    }, [location]);

    const handleDropdownClick = (setDropdownOpen) => {
        setDropdownOpen(prev => !prev);
    };

    const handleMobileMenuLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img id="logo-ri" src="/static/img/logo_majalengka.jpeg" alt="logo" className="w-9 h-9 ml-10" />
                        <span id="desa" className="ml-4 -mt-2 font-semibold">Desa Margajaya</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="nav-link">Home</Link>

                        {/* Profile Dropdown */}
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => handleDropdownClick(setProfileDropdownOpen)}
                                className="nav-link"
                                aria-expanded={isProfileDropdownOpen}
                                aria-controls="profile-dropdown"
                            >
                                Profile
                            </button>
                            {isProfileDropdownOpen && (
                                <ul id="profile-dropdown" className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50">
                                    <li>
                                        <Link className="dropdown-item" to="/sejarah">Sejarah</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/visi-misi">Visi & Misi</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Informasi Dropdown */}
                        <div className="relative" ref={informasiRef}>
                            <button
                                onClick={() => handleDropdownClick(setInformasiDropdownOpen)}
                                className="nav-link"
                                aria-expanded={isInformasiDropdownOpen}
                                aria-controls="informasi-dropdown"
                            >
                                Informasi
                            </button>
                            {isInformasiDropdownOpen && (
                                <ul id="informasi-dropdown" className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50">
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/berita">Berita</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/agenda">Agenda</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/informasi">Fasilitas Desa</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Demografis Dropdown */}
                        <div className="relative" ref={demografisRef}>
                            <button
                                onClick={() => handleDropdownClick(setDemografisDropdownOpen)}
                                className="nav-link"
                                aria-expanded={isDemografisDropdownOpen}
                                aria-controls="demografis-dropdown"
                            >
                                Demografis
                            </button>
                            {isDemografisDropdownOpen && (
                                <ul id="demografis-dropdown" className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50">
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/administrasi">Administrasi</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/wilayah">Wilayah</Link>
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Katalog Dropdown */}
                        <div className="relative" ref={katalogRef}>
                            <button
                                onClick={() => handleDropdownClick(setKatalogDropdownOpen)}
                                className="nav-link"
                                aria-expanded={isKatalogDropdownOpen}
                                aria-controls="katalog-dropdown"
                            >
                                E-Catalog
                            </button>
                            {isKatalogDropdownOpen && (
                                <ul id="katalog-dropdown" className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50">
                                    <li>
                                        <Link className="dropdown-item w-full text-left" to="/wisata">Gallery Wisata</Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" ref={mobileMenuRef}>
                    <div id="mobile-menu" className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={handleMobileMenuLinkClick}>Home</Link>

                        <div className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            <span>Profile</span>
                            <div className="pl-4 space-y-1">
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/sejarah" onClick={handleMobileMenuLinkClick}>Sejarah</Link>
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/visi-misi" onClick={handleMobileMenuLinkClick}>Visi & Misi</Link>
                            </div>
                        </div>

                        <div className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            <span>Informasi</span>
                            <div className="pl-4 space-y-1">
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/berita" onClick={handleMobileMenuLinkClick}>Berita</Link>
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/agenda" onClick={handleMobileMenuLinkClick}>Agenda</Link>
                                <hr className="border-t border-gray-200" />
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/informasi" onClick={handleMobileMenuLinkClick}>Fasilitas Desa</Link>
                            </div>
                        </div>

                        <div className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            <span>Demografis</span>
                            <div className="pl-4 space-y-1">
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/administrasi" onClick={handleMobileMenuLinkClick}>Administrasi</Link>
                                <hr className="border-t border-gray-200" />
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/wilayah" onClick={handleMobileMenuLinkClick}>Wilayah</Link>
                            </div>
                        </div>

                        <div className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            <span>E-Catalog</span>
                            <div className="pl-4 space-y-1">
                                <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" to="/wisata" onClick={handleMobileMenuLinkClick}>Gallery Wisata</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
