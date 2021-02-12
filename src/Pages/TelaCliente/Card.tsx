import React from "react";
import { Title, Text, Subtitle } from "./style";

const Card: React.FC = () => {
    return (
        <>
            <Title>Jackê Mesa Posta</Title>
            <Subtitle>Endereço:</Subtitle>
            <Text>Rua Aratuba 231</Text>
            <Subtitle>TPV potencial:</Subtitle>
            <Text>2k</Text>
            <Subtitle>Segment do logista:</Subtitle>
            <Text>Roupa de mesa</Text>
            <Subtitle>Nível de satisfação</Subtitle>
            <Text>bom</Text>
            <Subtitle>% de migração</Subtitle>
            <Text>50%</Text>
            <Subtitle>Data da última visita</Subtitle>
            <Text>20/08/2020</Text>
            <Subtitle>Existe visita planejada hoje?</Subtitle>
            <Text>Não</Text>
        </>
    );
};
export default Card;
