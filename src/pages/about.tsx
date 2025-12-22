import React from 'react';

import Image from 'next/image';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={<Meta title="소개" description="서도사의 풍수지리 블로그 소개" />}
  >
    <Content>
      <div className="flex justify-center">
        <Image
          src="/assets/images/mountain.jpg"
          alt="산의 정기"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-center mt-8">
        인생의 나침반, 풍수지리 전문가 서도사입니다.
      </h2>
      <p className="mt-4">
        안녕하십니까. &apos;서도사의 풍수지리&apos; 블로그를 운영하는
        서도사입니다. 지난 20여 년간 풍수지리의 깊이를 탐구하며 수많은 분들의
        인생 여정에서 길잡이가 되어드렸습니다.
      </p>
      <p className="mt-4">
        제가 생각하는 풍수지리는 단순히 좋은 집터를 찾는 기술이 아닙니다. 이는
        자연의 흐름을 이해하고, 그 기운을 우리 삶에 조화롭게 활용하여 인생을 더
        나은 방향으로 이끌어가는 지혜입니다. 풍수지리는 정해진 운명에 얽매이는
        것이 아니라, 우리 스스로가 주변 환경과의 상호작용을 통해 삶을 개선해
        나갈 수 있도록 돕는 &apos;인생의 지도&apos;와 같습니다.
      </p>
      <p className="mt-4">
        이 블로그는 더 많은 분들과 풍수지리의 지혜를 나누고, 스스로의 인생
        로드맵을 그려나가는 데 도움을 드리고자 만들었습니다. 제가 쌓아온 지식과
        경험을 바탕으로 풍수지리에 대한 깊이 있는 정보와 삶의 지혜를 알기 쉽게
        풀어드리겠습니다.
      </p>
      <p className="mt-4">
        여러분의 인생 여정에 든든한 길잡이가 되어드리겠습니다.
        <br />
        감사합니다.
      </p>
    </Content>
  </Main>
);

export default About;
