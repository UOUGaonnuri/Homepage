import free from '../assets/images/img_free.jpg'
import game from '../assets/images/img_game.jpg'
import algorithm from '../assets/images/img_algorithm.jpg'
import mobile from '../assets/images/img_mobile.jpg'
import web from '../assets/images/img_web.jpg'

export default function ActivitiesPage() {
  return (
    <>
        <div className='min-h-[calc(100vh-70px)] md:h-[calc(100vh-70px)] w-full bg-white flex flex-col'>
            <div className="py-10 md:h-40 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[27px] px-6 text-center md:text-left break-keep shrink-0">
                <div className="text-black text-[28px] md:text-[40px] font-normal">
                    활동분야
                </div>
                <p className="text-sm md:text-base text-gray-800">
                    다양한 분야에 대해 스터디와 프로젝트를 매 학기마다 진행중입니다.
                </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col md:flex-row">
                
                {/* 웹/앱 분야*/}
                <div className="relative flex-1 w-full min-h-[150px] md:min-h-0 h-full group overflow-hidden">
                    <img src={web} alt="웹/앱" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 md:bottom-[31px] left-4 md:left-[25px] text-white">
                        <div className="text-xl md:text-[24px] font-bold transition-transform duration-300 -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-8">
                            웹/앱
                        </div>
                        <div className="absolute bottom-0 left-0 text-sm md:text-base font-medium transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 whitespace-nowrap">
                            자세히 보기
                        </div>
                    </div>
                </div>
                
                {/* 게임*/}
                <div className="relative flex-1 w-full min-h-[150px] md:min-h-0 h-full group overflow-hidden">
                    <img src={game} alt="메타버스 게임" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 md:bottom-[31px] left-4 md:left-[25px] text-white">
                        <div className="text-xl md:text-[24px] font-bold transition-transform duration-300 -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-8">
                            메타버스 게임
                        </div>
                        <div className="absolute bottom-0 left-0 text-sm md:text-base font-medium transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 whitespace-nowrap">
                            자세히 보기
                        </div>
                    </div>
                </div>
                
                {/* 알고리즘 */}
                <div className="relative flex-1 w-full min-h-[150px] md:min-h-0 h-full group overflow-hidden">
                    <img src={algorithm} alt="알고리즘" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 md:bottom-[31px] left-4 md:left-[25px] text-white">
                        <div className="text-xl md:text-[24px] font-bold transition-transform duration-300 -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-8">
                            알고리즘
                        </div>
                        <div className="absolute bottom-0 left-0 text-sm md:text-base font-medium transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 whitespace-nowrap">
                            자세히 보기
                        </div>
                    </div>
                </div>
                
                {/* 모바일*/}
                <div className="relative flex-1 w-full min-h-[150px] md:min-h-0 h-full group overflow-hidden">
                    <img src={mobile} alt="모바일" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 md:bottom-[31px] left-4 md:left-[25px] text-white">
                        <div className="text-xl md:text-[24px] font-bold transition-transform duration-300 -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-8">
                            모바일
                        </div>
                        <div className="absolute bottom-0 left-0 text-sm md:text-base font-medium transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 whitespace-nowrap">
                            자세히 보기
                        </div>
                    </div>
                </div>
                
                {/* 자유주제 */}
                <div className="relative flex-1 w-full min-h-[150px] md:min-h-0 h-full group overflow-hidden">
                    <img src={free} alt="자유주제" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 md:bottom-[31px] left-4 md:left-[25px] text-white">
                        <div className="text-xl md:text-[24px] font-bold transition-transform duration-300 -translate-y-6 md:translate-y-0 md:group-hover:-translate-y-8">
                            자유주제
                        </div>
                        <div className="absolute bottom-0 left-0 text-sm md:text-base font-medium transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 whitespace-nowrap">
                            관련 내용
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}