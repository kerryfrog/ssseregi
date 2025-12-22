import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => (
  <Main
    meta={
      <Meta
        title="연락처"
        description="서도사에게 연락하시려면 아래 양식을 사용해 주세요."
      />
    }
  >
    <Content>
      <h2>연락처</h2>
      <p>
        &apos;서도사의 풍수지리&apos; 블로그에 대한 문의, 제휴, 또는 기타 제안
        사항이 있으시면 아래 이메일로 연락 주시기 바랍니다. 보내주신 내용은
        꼼꼼히 검토한 후 회신드리겠습니다.
      </p>
      <p className="mt-4">
        <strong>이메일:</strong> kerryfrog@naver.com
      </p>
    </Content>
  </Main>
);

export default Contact;
