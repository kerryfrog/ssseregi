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
      <h2>문의 및 제안 (Contact & Partnership)</h2>
      <p>
        서도사의 풍수지리에 관심을 가져주셔서 감사합니다. 개인적인 상담 문의부터
        비즈니스 제휴까지, 여러분의 소중한 의견을 기다리고 있습니다. 아래의 안내
        사항을 확인하신 후 연락 주시면 보다 정확하고 빠른 답변이 가능합니다.
      </p>

      <h2 className="mt-8">📩 주요 문의 분야</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <strong>비즈니스 제휴 및 협업:</strong> 기업 사옥 풍수 컨설팅, 강연
          요청, 콘텐츠 협업 제휴
        </li>
        <li>
          <strong>개인 상담 문의:</strong> 주거 공간(아파트, 주택) 및 사무실
          배치 상담, 이사 날짜 택일 등
        </li>
        <li>
          <strong>콘텐츠 제보 및 건의:</strong> 블로그 내용에 대한 의견이나
          다루어 주었으면 하는 주제 제안
        </li>
        <li>
          <strong>기타 제안:</strong> 그 외 모든 창의적인 제안 및 협력 프로젝트
        </li>
      </ul>

      <h2 className="mt-8">📍 연락처 정보</h2>
      <p className="mt-2">
        <strong>Official Email:</strong> seodosa.contact@gmail.com
      </p>
      <p className="mt-2">
        <strong>Response Time:</strong> 보내주신 제안은 서도사가 직접 꼼꼼히
        검토하며, 업무일 기준 24시간 이내에 회신드리는 것을 원칙으로 합니다.
      </p>

      <h2 className="mt-8">✍️ 문의 시 포함해 주시면 좋은 내용</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>성함 (또는 기업명/브랜드명)</li>
        <li>문의 목적 및 개요 (예: 강연 요청, 개인 상담 신청 등)</li>
        <li>회신 받으실 연락처</li>
      </ul>
    </Content>
  </Main>
);

export default Contact;
