import tw, {styled} from "twin.macro";
import { HiOutlineExclamation } from 'react-icons/hi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Section = styled.section`
  ${tw`fixed inset-0 cursor-default flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50`}
`;

export const Contents = styled.div`
  ${tw`w-full max-h-32 flex flex-col items-center space-y-4 sm:items-end`}
`;

export const Items = styled.div`
  ${tw`bg-white max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}
`;

export const Item = styled.div`
  ${tw`flex justify-start items-center p-4 items-start`}
`;

export const TextArea = styled.div`
  width: calc(100% - 2.5rem);
  ${tw`flex flex-col`}
`;

export const Text = styled.p`
  ${tw`flex-1 text-sm font-medium text-gray-900 truncate whitespace-normal break-words leading-7`}
`;

export const ErrorIcon = tw(HiOutlineExclamation)`h-6 w-6 text-red-600 mr-4 my-1`;
export const InfoIcon = tw(AiOutlineCheckCircle)`h-6 w-6 text-green-600 mr-4 my-1`;