import React from 'react';

import { Container, Title, HashtagIcon, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon/>
            <Title>chat-livre</Title>
            <Separator/>
            <Description>Canal para celebrar a liberdade</Description>

        </Container>
    )
};

export default ChannelInfo;
