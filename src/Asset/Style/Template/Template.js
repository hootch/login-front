import styled from 'styled-components'
import tw from "twin.macro";

export const TemplateProfile = styled.div`
    ${tw`w-64 h-64 bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full font-bold text-9xl text-white flex justify-center items-center`}
`;

export const TemplateContainer = styled.div`
    ${tw`w-full h-screen p-10 flex flex-col justify-center items-center space-y-3`}
`;

export const TemplateUserId = styled.p`
    ${tw`font-bold text-2xl`}
`;

export const TemplateLastLogin = styled.p`
    ${tw`font-thin text-sm`}
`;

export const TempalteButton = styled.button`
    ${tw`font-bold rounded-md p-2 bg-gray-400 text-gray-100 text-sm cursor-pointer hover:bg-gray-600`}
`;

export const TempalteWarrningButton = styled.button`
    ${tw`font-bold rounded-md p-2 bg-red-400 text-gray-100 text-sm cursor-pointer hover:bg-red-600`}
`;
