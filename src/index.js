import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./tailwind.css"
import CommonStyle from "./Asset/Style/Common"

import store from "./Store"
import { Provider } from "react-redux"
import { CookiesProvider } from 'react-cookie';

//ReactDOM : Virtual DOM에서 HTML을 생성하는 데 필요한 라이브러리이며, 리액트 엘리먼트를 브라우저에 렌더링 하는 데 필요한 모든 도구가 들어 있다
//ReactDOM.render : 전달한 컨테이너 노드의 콘텐츠를 제어. React 엘리먼트가 이전에 container 내부에 렌더링 되었다면 해당 엘리먼트는 업데이트하고 최신의 React 엘리먼트를 반영하는 데 필요한 DOM만 변경
//ReactDOM.render(element, container[, callback])
ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <CommonStyle />
            <App />
        </Provider>
    </CookiesProvider>,
    document.getElementById("root")
);