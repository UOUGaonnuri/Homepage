import { NavLink } from "react-router-dom"
import logo from "../assets/images/img_logo.png"

const navClass = ({ isActive }) => (isActive ? "text-white" : "hover:text-white")

export default function Header() {
  return (
    <>
        {/* 배경 */}
        <header className="fixed top-0 left-0 w-full h-[70px] z-50 bg-[#333333] flex px-4 md:px-[94px] items-center justify-between">
            {/* 로고 + 가온누리 */}
            <div className="flex gap-[10px] items-center">
                <img src={logo} alt="가온누리 로고" className="h-[46px] w-[46px] rounded-full"/>
                <div className="text-white text-lg">
                    가온누리
                </div>
            </div>
            {/* 메뉴 */}
            <nav className="flex gap-4 md:gap-[75px] text-[#B2B2B2] text-sm md:text-lg">
                {/* 홈 */}
                <NavLink to="/" className={navClass}>
                    홈
                </NavLink>
                {/* 활동 */}
                <NavLink to="/activities" className={navClass}>
                    활동
                </NavLink>
                {/* 결과물 */}
                <NavLink to="/projects" className={navClass}>
                    결과물
                </NavLink>
                {/* 모집 */}
                <NavLink to="/recruitment" className={navClass}>
                    모집
                </NavLink>
                {/* QnA */}
                <NavLink to="/qna" className={navClass}>
                    QnA
                </NavLink>
            </nav>
        </header>
    </>
  )
}