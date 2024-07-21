import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-10 py-10">
            <div className="container pl-10  mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4">Company</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Articles</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Platforms</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Agencies</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Resources</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Popular</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Influencer Marketing Platforms</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Influencer Marketing Agencies</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Social Media Marketing Platforms</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Social Media Agencies</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Email Marketing Software</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Digital Marketing Agencies</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Free Tools</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">TikTok Engagement Calculator</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Instagram Calculator</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">YouTube Calculator</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Glossary</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Image Resizer</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Other Links</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Affiliate Disclaimer</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Member Login</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Authors and Experts</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Agency Hub</a></li>
                    </ul>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <a href="#" className="hover:text-pink-500"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="hover:text-pink-500"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-pink-500"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>Copyright 2024 influencermarketinghub. all rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
