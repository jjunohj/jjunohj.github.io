---
title: "[React] Emotion.js 소개 및 사용법"
excerpt: "CSS-in-JavaScript"

categories:
  - React
tags:
  - [React, JavaScript, CSS, Emotion]

toc: true
toc_sticky: true

date: 2023-07-05
last_modified_at: 2023-07-05

header:
  teaser: /assets/images/Emotion.png
---

![Emotion](/assets/images/Emotion.png)

# 01. Emotion이란?

Emotion은 분리된 CSS 파일을 만드는 것 대신에 자바스크립트로 모든 스타일을 작성할 수 있도록 하는 JavaScript 라이브러리이다.

스타일의 범위 지정, 조건부 및 동적 스타일, 재사용 가능성 및 유지 관리와 같은 기능을 제공한다.

JS로 작성된 스타일은 결과적으로 통합되어 통합된 CSS파일을 생성한다.

## 사용하는 이유?

웹 컴포넌트의 UI를 구성할 때 styled component를 사용하는 경우도 있다. 하지만 아래와 같은 Emotion의 특징으로 인해 현재는 Emotion.js의 사용률이 styled component를 능가한 상황이다.

- props, 조건 등에 따라 스타일을 지정할 수 있다.
- 반응형을 쉽고 빠르게 적용할 수 있다.
- CSS Props 기능을 제공한다.
- Server Side Rendering시 세팅이 간편하다.

# 02. 사용법

## 설치

Emotion을 설치하기 위해 다음 패키지를 설치한다.

```
yarn add @emotion/react @emotion/styled
```

## 스타일링

`style`폴더에 스타일 파일을 저장해두고 사용하며, 자주 사용하는 컴포넌트와 스타일을 글로벌 UI로 하여 각 요소에서 중복되는 코드를 최대한 줄인다.

`style`내부에 추가 폴더를 생성하여 스타일의 용도와 범위에 따라 각 스타일 파일을 정리해두면 유지보수에 용이할 것이다.

ex. component, theme, layout, libs

### css 속성 이용

```
import { css } from '@emotion/react';
export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Header_28: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(28)};
    line-height: 150%;
    font-weight: 700;
  `,
  Header_24: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(24)};
    line-height: 150%;
    font-weight: 700;
  `,
  Header_20: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    line-height: 150%;
    font-weight: 700;
  `,
}
```

Emotions에서 css prop을 불러와 이용한다. css 선언은 객체 형식으로 넘겨도 되고, 문자열 형식으로 넘겨도 된다. 위의 typo는 문자열 형식으로 넘긴 것이며 아래는 객체 형식으로 넘긴 것이다.

```
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function MyComponent() {
  return (
    <div
      css={css({
        backgroundColor: "yellow",
      })}
    >
      노란색 영역
    </div>
  );
}
```

단, 여기서 주의해야 할 점은 `/** @jsxImportSource @emotion/react */` 인데, JSX pragma이다. Babel을 사용하는 경우에는 트랜스파일러한테 JSX 코드를 변환할 때, React의 jsx() 함수를 사용하지 말고, Emotion의 jsx() 함수를 대신 사용하라고 알려주기 위해 사용하는 것이다. 해당 내용을 작성하지 않으면 css 함수에 prop으로 넘겨준 것이 제대로 적용되지 않는다.

### styled 컴포넌트 이용

Emotion은 styled component 또한 지원한다. 이 또한 마찬가지로 객체 혹은 문자열 형식으로 넘길 수 있다.

```
export const Heading = styled.h1`
    background-color: ${props => props.bg};
    color: ${props => props.fg};
`
```

이렇게 생성한 Heading을 사용할 때 Heading에 색상값을 전달해 줄 수 있다.

```
<Heading bg="#008f68" fg="#fae042">
  Heading with a green background and yellow text.
</Heading>
```

또한 문자열 대신 객체를 넘길 수도 있다.

```
export const Quote = styled('blockquote')(props => ({
  fontSize: props.size,
}));
```

이는 기본 스타일의 개체도 포함한다.

```
const Cite = styled('cite')(
  {
    fontWeight: 100
  },
  props => ({
    fontWeight: props.weight
  })
);
```

### 예시

```
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

const Subheading = Heading.withComponent('h2');

const Quote = styled('blockquote')(props => ({
  fontSize: props.size
}));

const Cite = styled('cite')(
  {
    fontWeight: 100
  },
  props => ({
    fontWeight: props.weight
  })
);

const Footer = styled('footer')`
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px;
`;

function App() {
  return (
    <div css={css`background: #ddd;`}>
      <div css={css({ padding: 10 })}>
        <Heading bg="#008f68" fg="#fae042">
          Quotations
        </Heading>
        <Subheading fg="#6db65b">
          For React Developers
        </Subheading>
        <Quote size={28}>
          I built this with <code>`emotion/react`</code> and <code>`emotion/styled`</code>!
        </Quote>
        <Cite weight={700}>Sammy</Cite>
        <Footer>Shark Facts</Footer>
      </div>
    </div>
  );
}

export default App;
```

~ 추가 내용 삽입이 있을 예정입니다. ~

# References

[Eugene - [커비샵 개발일지 #2] emotion과 global ui 세팅](https://velog.io/@gene028/%EC%BB%A4%EB%B9%84%EC%83%B5-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80-2-emotion%EA%B3%BC-global-ui-%EC%84%B8%ED%8C%85)

[DigitalOcean - How To Use Emotion for Styling in React](https://www.digitalocean.com/community/tutorials/react-react-emotion)
