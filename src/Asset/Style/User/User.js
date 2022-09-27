import styled from 'styled-components';
import tw from 'twin.macro';

export const UserContainer = styled.div`
	${tw`w-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8`}
`;

export const UserTitle = styled.h2`
    ${tw`mt-6 text-center text-3xl font-extrabold text-gray-900`}
`;

export const UserBody = styled.div`
    ${tw`mt-8 sm:mx-auto sm:w-full sm:max-w-md`}
`;

export const UserContents = styled.div`
    ${tw`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10`}
`;

export const UserForm = styled.form`
    ${tw`space-y-6`}
`;

export const UserLabel = styled.label`
    ${tw`block text-sm font-medium text-gray-700`}
`;

export const UserMarginTop = styled.div`
    ${tw`mt-1`}
`;

export const UserInput = styled.input`
    ${tw`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm`}
`;

export const UserError = styled.p`
    ${tw`text-sm font-medium`}
`;

export const UserButton = styled.button`
    ${tw`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-500 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-600`}
`;

export const UserButtonDiv = styled.div`
    ${tw`text-sm mt-2 px-10 flex items-center justify-end`}
`;

export const UserA = styled.a`
    ${tw`font-medium text-gray-500 hover:text-gray-700`}
`;
