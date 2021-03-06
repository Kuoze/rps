import React, { useContext } from 'react';
import { useMatchMedia } from '../../../hooks/useMatchMedia';
import { ThemeContext } from '../../../context/themeContext';
import { types } from '../../../types/types';
import { NavbarMobile } from './NavbarMobile';
import { NavbarDesktop } from './NavbarDesktop';
import { FAQ } from '../../modals/FAQ';
import { HowToPlay } from '../../modals/HowToPlay';

export const Navbar = () => {

    const isMobileResolution = useMatchMedia('(max-width:992px)', false);

    const { theme, dispatch } = useContext(ThemeContext);

    const handleThemeChange = () => {

        dispatch({
            type: types.theme,
            payload: {
                theme: theme.theme === 'light' ? 'dark' : 'light'
            }
        });
    };

    return (
        <>
            {
                isMobileResolution
                    ? <NavbarMobile theme={theme.theme} handleThemeChange={handleThemeChange} />
                    : <NavbarDesktop theme={theme.theme} handleThemeChange={handleThemeChange} />
            }
            
            <FAQ theme={theme.theme} />
            <HowToPlay theme={theme.theme} />

        </>
    );
};
