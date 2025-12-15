import React from 'react';

import Image from 'next/image';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="유박사 소개 | 인생 로드맵"
        description="사주명리학 전문가 유박사를 소개합니다."
      />
    }
  >
    <Content>
      <div className="m-auto w-full sm:w-3/4 md:w-1/2">
        <Image
          src="/assets/images/posts/doctoru.png"
          alt="유박사"
          width={400}
          height={400}
        />
      </div>
      <h2 className="text-center">
        인생의 나침반, 사주명리학 전문가 유박사입니다.
      </h2>
      <p className="mt-4">
        안녕하십니까. &apos;유박사의 인생 로드맵&apos; 블로그를 운영하는
        유박사입니다. 지난 10여 년간 사주명리학의 깊이를 탐구하며 수많은 분들의
        인생 여정에서 길잡이가 되어드렸습니다.
      </p>
      <p className="mt-4">
        제가 생각하는 사주명리학은 단순히 미래를 맞추는 점술이 아닙니다. 이는
        태어난 생년월일시를 통해 개인이 가진 고유한 기질과 잠재력, 그리고 인생의
        큰 흐름을 파악하는 통계학이자 자연 철학입니다. 사주팔자는 우리에게
        정해진 운명을 강요하는 것이 아니라, 우리 스스로가 삶을 더 나은 방향으로
        설계할 수 있도록 돕는 &apos;인생의 지도&apos;와 같습니다.
      </p>
      <p className="mt-4">
        이 블로그는 더 많은 분들과 사주명리학의 지혜를 나누고, 스스로의 인생
        로드맵을 그려나가는 데 도움을 드리고자 만들었습니다. 제가 쌓아온 지식과
        경험을 바탕으로 사주팔자에 대한 깊이 있는 정보와 삶의 지혜를 알기 쉽게
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
