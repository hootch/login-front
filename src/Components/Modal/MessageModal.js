import { Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react"
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import { REMOVE_MESSAGE } from "../../Store/Message/Message";

import {
    Section,
    Contents,
    Items,
    Item,
    TextArea,
    Text,
    ErrorIcon,
    InfoIcon,
} from "../../Asset/Style/Modal/MessageModal";

const MessageBoxIconComponent = ({ state }) => {
    return (
        <div>
            {state === "info" && (<InfoIcon />)}
            {state === "error" && (<ErrorIcon />)}
        </div>
    )
};

const MessageModal = () => {
    const [open, setOpen] = useState(false);

    const { state, message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (message.length > 0) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
                dispatch(REMOVE_MESSAGE());
            }, 5000);
        }
    }, [message]);

    return (
        <Section aria-live="assertive">
            <Contents>
                <Transition
                    show={open}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Items>
                        <Item>
                            <MessageBoxIconComponent state={state} />
                            <TextArea>
                                {message.map((msg) => (
                                    <Text key={uuidv4()}>{msg}</Text>
                                ))}
                            </TextArea>
                        </Item>
                    </Items>
                </Transition>
            </Contents>
        </Section>
    );
}

export default MessageModal;