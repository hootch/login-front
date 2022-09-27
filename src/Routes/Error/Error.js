import { useNavigate } from 'react-router';

import { 
    ErrorContainer,
    ErrorTitle,
    ErrorText,
    ErrorItems,
    ErrorDescription,
    ErrorItem,
    ErrorButtons,
    ErrorButton,
} from '../../Asset/Style/Error/Error';

const Error = () => {
    const navigate = useNavigate();

    return (
        <ErrorContainer>
            <ErrorTitle>
                <ErrorText style={{fontSize: "12rem"}}>404</ErrorText>
            </ErrorTitle>
            <ErrorItems>
                <ErrorDescription>
                    Page Not Found
                </ErrorDescription>
                <ErrorItem>요청하신 페이지를 찾을 수 없습니다.<br />
                      찾고 있는 페이지의 이름이 변경되었거나 일시적으로 사용할 수 없는 경우 제거되었을 수 있습니다.
                </ErrorItem>
                <ErrorButtons>
                    <ErrorButton onClick={() => navigate('/')}>홈으로 돌아가기</ErrorButton>
                </ErrorButtons>
            </ErrorItems>
        </ErrorContainer>
    )

}

export default Error;