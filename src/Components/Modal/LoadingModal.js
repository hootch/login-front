import { useSelector } from "react-redux";

import { 
    LoadingModalSection,
    LoadingModalBackground,
    LoadingModalItems,
    LoadingModalCircle,
} from "../../Asset/Style/Modal/LoadingModal"

const LoadingModal = () => {
    const {isLoading} = useSelector(state => state.loading)
    
    return (
        <>
            {isLoading && (
                <LoadingModalSection>
                    <LoadingModalBackground />
                    <LoadingModalItems>
                        <LoadingModalCircle />
                    </LoadingModalItems>
                </LoadingModalSection>
            )}
        </>
    )
}

export default LoadingModal;