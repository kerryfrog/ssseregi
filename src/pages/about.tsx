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
        서도사입니다. 저는 지난 20여 년간 인생의 굽이굽이를 지나며 수많은 사람과
        자연의 이치를 관찰해왔습니다. 세상의 이치가 복잡하게 얽혀 있지만, 그
        안에는 분명한 흐름과 기운이 존재함을 깨닫게 되었지요.
      </p>
      <p className="mt-4">
        오랜 세월 동안 삶의 현장에서 사람들의 희로애락을 함께하며, 저는 자연의
        섭리와 인간의 삶이 얼마나 밀접하게 연결되어 있는지 깊이 이해하게
        되었습니다. 주변 환경의 작은 변화가 개인의 운명에 지대한 영향을 미친다는
        것을 수많은 경험을 통해 확신하게 되었고, 이 깨달음이 저를 풍수지리의
        길로 이끌었습니다. 지난 20여 년간 풍수지리의 깊이를 탐구하며 수많은
        분들의 인생 여정에서 길잡이가 되어드렸습니다.
      </p>
      <p className="mt-4">
        제가 생각하는 풍수지리는 단순히 좋은 집터를 찾는 기술이 아닙니다. 이는
        자연의 흐름을 이해하고, 그 기운을 우리 삶에 조화롭게 활용하여 인생을 더
        나은 방향으로 이끌어가는 지혜입니다. 풍수지리는 정해진 운명에 얽매이는
        것이 아니라, 우리 스스로가 주변 환경과의 상호작용을 통해 삶을 개선해
        나갈 수 있도록 돕는 &apos;인생의 지도&apos;와 같습니다.
      </p>
      <p className="mt-4">
        이 블로그는 차가운 논리의 세계와 따뜻한 기운의 세계, 그 둘을 모두 경험한
        저의 지혜를 더 많은 분들과 나누고자 만들었습니다. 제가 쌓아온 지식과
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
