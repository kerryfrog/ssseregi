import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => (
  <Main
    meta={
      <Meta
        title="연락처 | 유박사의 인생 로드맵"
        description="블로그 관련 문의나 제안 사항이 있으시면 언제든지 연락주세요."
      />
    }
  >
    <Content>
      <h2>연락처</h2>
      <p>
        &apos;유박사의 인생 로드맵&apos; 블로그에 대한 문의, 제휴, 또는 기타
        제안 사항이 있으시면 아래 이메일로 연락 주시기 바랍니다. 보내주신 내용은
        꼼꼼히 검토한 후 회신드리겠습니다.
      </p>
      <p className="mt-4">
        <strong>카카오톡 오픈채팅:</strong>{' '}
        <a
          href="https://open.kakao.com/o/scEBPI6h"
          target="_blank"
          rel="noopener noreferrer"
        >
          오픈채팅으로 문의하기 (입장코드 5291)
        </a>
      </p>
    </Content>
  </Main>
);

export default Contact;
