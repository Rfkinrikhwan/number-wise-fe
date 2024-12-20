import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import { useEffect } from 'react';
import SectionFour from './SectionFour';
import { changeThemeStore } from '@/store';

export default function Index() {
    const { theme } = changeThemeStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SectionOne theme={theme} />

            <SectionTwo theme={theme} />

            <SectionThree theme={theme} />

            <SectionFour theme={theme} />
        </>
    )
}
