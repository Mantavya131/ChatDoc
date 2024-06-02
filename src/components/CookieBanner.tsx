// components/cookiebanner.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
    }, []);

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied';

            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });

            setLocalStorage("cookie_consent", cookieConsent);

            // For Testing
            console.log("Cookie Consent: ", cookieConsent);
        }
    }, [cookieConsent]);

    if (cookieConsent !== null) {
        return null; // Hide banner if cookieConsent is set
    }

    return (
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}>
            <div className='text-center'>
                <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
            </div>
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>   
        </div>
    );
}
