import react, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('');


    return (
     <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)}/>
            
            <HeaderSearchButton>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
)
};

export default Header;