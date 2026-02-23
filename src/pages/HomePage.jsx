import gaonnuri from '../assets/icons/ic_gaonnuri.png'

export default function HomePage() {
  return (
    <div className='min-h-[calc(100vh-70px)] w-full bg-gradient-to-r from-[#2B3072] to-[#000000] flex flex-col lg:flex-row p-8 lg:p-16 items-center justify-center gap-12 md:gap-24 lg:gap-[172px]'>
        <img 
            src={gaonnuri} 
            alt="가온누리 로고" 
            className='w-[280px] md:w-[350px] lg:w-[452px] h-auto object-contain'
        />
        <div className='flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start'>
            <h1 className='font-semibold text-3xl lg:text-[40px] leading-tight lg:leading-[48px] text-white'>
                가온누리
            </h1>
            <p className='font-light text-base lg:text-lg leading-relaxed lg:leading-[47px] tracking-wide lg:tracking-[0.05em] text-white max-w-[570px] break-keep'>
                가온누리는 다양한 ICT 분야의 연구 개발을 목적으로 설립된 동아리입니다. 
                ICT 분야 중 자신의 관심 분야에 맞춰 선후배간의 협업을 통해 프로젝트를 
                수행하고 이에 따르는 학습 및 교육을 병행하여 산출된 프로젝트 결과물로 
                각종 공모전에 출품하여 입상을 목표로 하고 있습니다. 가온누리는 열정을 
                가지고 다양한 경험을 쌓고자 하는 사람에게 언제나 열려있습니다.
            </p>
        </div>
    </div>
  )
}