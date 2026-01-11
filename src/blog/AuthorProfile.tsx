import React from 'react';

const AuthorProfile = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl flex items-center my-10 border border-gray-200 shadow-sm">
      <div className="w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0 border-4 border-white shadow-md">
        <img
          src="/assets/images/muhakdosa.jpeg"
          alt="서도사"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center mb-2 gap-2">
          <span className="font-bold text-2xl text-gray-900">서도사</span>
          <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-semibold tracking-wider uppercase">
            20년 경력의 풍수 전문가
          </span>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          20년 넘게 산과 들을 누비며 땅의 숨결을 읽어온 풍수지리 전문가
          서도사입니다. 전통적인 풍수 지혜를 현대적인 삶의 공간에 조화롭게
          적용하여, 여러분의 삶에 긍정적인 기운과 복이 깃들 수 있도록 돕는
          길잡이가 되고자 합니다.
        </p>
      </div>
    </div>
  );
};

export { AuthorProfile };
