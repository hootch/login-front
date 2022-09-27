import styled from 'styled-components';
import tw from 'twin.macro'


export const ErrorContainer = styled.div`
  ${tw`w-full h-full mt-32 items-center justify-center`}
`;

export const ErrorTitle = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const ErrorText = styled.div`
  ${tw`font-normal text-center text-gray-700`}
`;

export const ErrorItems = styled.div`
  ${tw`w-full mt-12 flex flex-col items-center justify-center`}
`;

export const ErrorDescription = styled.div`
  ${tw`flex items-center justify-center text-3xl font-bold text-gray-500`}
`;

export const ErrorItem = styled.div`
  ${tw`my-8 flex items-center justify-center text-sm text-gray-400 font-light text-center leading-7`}
`;

export const ErrorButtons = styled.div`
  ${tw`flex items-center justify-center mt-6`}
`;

export const ErrorButton = styled.button`
  ${tw`w-40 h-10 flex justify-center items-center py-2 px-4 mx-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
`;