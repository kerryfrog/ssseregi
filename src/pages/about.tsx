import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={<Meta title="소개" description="서도사의 풍수지리 블로그 소개" />}
  >
    <Content>
      <h2>
        공간의 기운으로 인생의 길을 여는, 20년 경력 풍수(風水) 전문가
        서도사입니다.
      </h2>
      <p className="mt-4">
        안녕하십니까. 서도사의 풍수지리 블로그를 운영하는 서도사입니다.
      </p>
      <p className="mt-4 font-bold text-lg">
        운명(運命)은 정해진 것이 아니라, 우리가 머무는 공간을 통해 스스로
        개척하는 것입니다.;
      </p>
      <p className="mt-4">
        저는 지난 20여 년간 대한민국 전역의 산천(山川)을 누비며 땅의 숨결을
        읽고, 수많은 주거 공간과 비즈니스 현장에서 자연의 이치가 인간의 삶에
        미치는 영향을 연구해 왔습니다. 차가운 논리가 지배하는 세상과 따뜻한
        기운이 흐르는 영적인 세계를 모두 경험하며, 저는 주변 환경의 작은 변화가
        한 개인의 건강, 재물(財物), 그리고 화목(和睦)에 얼마나 지대한 영향을
        미치는지 수많은 임상 사례를 통해 확신하게 되었습니다.
      </p>

      <h2 className="mt-8">왜 서도사의 풍수지리여야 하는가?</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <strong>20년 필드 경험의 데이터:</strong> 단순히 이론에 매몰되지 않고,
          실제 이사, 인테리어, 사옥 배치 후 삶이 변화한 수천 건의 사례를
          바탕으로 살아있는 지혜를 전달합니다.
        </li>
        <li>
          <strong>현대적 삶에 맞춘 실용 풍수:</strong> 전통 풍수의 핵심 원리인
          장풍득수(藏風得水)의 가치는 지키되, 아파트와 오피스 빌딩 등 현대적
          건축 구조에 즉시 적용 가능한 생활 밀착형 풍수 솔루션을 제안합니다.
        </li>
        <li>
          <strong>인생의 종합 지도:</strong> 제가 생각하는 풍수지리는 단순한
          길흉화복(吉凶禍福)의 판단을 넘어, 자연의 흐름에 순응하며 스스로의 삶을
          긍정적인 방향으로 가꾸어 나가는 인생의 나침반이 되어드리는 것입니다.
        </li>
      </ul>

      <h2 className="mt-8">이 블로그를 통해 당신이 얻게 될 것들</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <strong>양택(陽宅) 풍수 인테리어:</strong> 가구 배치 하나로 집안의
          기운을 바꾸는 실전 비책(秘策)
        </li>
        <li>
          <strong>지기(地氣) 읽기:</strong> 서울과 전국의 주요 명당(明堂) 분석을
          통한 거주지 선택의 지혜
        </li>
        <li>
          <strong>심신(心身)의 조화:</strong> 공간 정리를 통해 복잡한 마음을
          다스리고 삶의 질을 높이는 방법
        </li>
      </ul>

      <p className="mt-4">
        이곳에 담긴 글들은 저의 20년 공부와 현장 경험이 응축된 결과물입니다.
        풍수지리라는 고전의 지혜를 가장 쉽고 명쾌하게 풀어내어, 여러분의 인생
        여정에 든든한 조력자(助力者)가 되어드리겠습니다.
      </p>
      <p className="mt-4 font-bold text-lg">
        지금, 당신의 공간에서 새로운 운명의 흐름을 시작해 보십시오.
      </p>
      <p className="mt-4">감사합니다.</p>
    </Content>
  </Main>
);

export default About;
