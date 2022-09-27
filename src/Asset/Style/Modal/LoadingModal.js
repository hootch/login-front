import tw, { styled } from 'twin.macro';

export const LoadingModalSection = styled.section`
    ${tw`absolute w-screen h-screen top-0 left-0 z-50`}
`

export const LoadingModalBackground = styled.article`
    ${tw`w-full h-full bg-gray-900 opacity-80`}
`;

export const LoadingModalItems = styled.article`
    transform: translate(-2.5rem, -2.5rem);
    ${tw`w-20 h-20 absolute flex justify-center items-center left-1/2 top-1/2`}
`;

export const LoadingModalCircle = styled.div`
    animation: spin 1s linear infinite;
    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
    ${tw`w-20 h-20 border-8 opacity-100 border-gray-400 border-solid rounded-full animate-spin border-t-transparent`}
`;

// export const LoadingModalCircle = styled.div`
//     animation: spin 1s linear infinite;
//     @keyframes spin {
//         from {
//           transform: rotate(0deg);
//         }
//         to {
//           transform: rotate(360deg);
//         }
//     }
//     ${tw`w-20 h-20 border-8 opacity-100 border-indigo-400 border-solid rounded-full animate-spin border-t-transparent`}
// `;
