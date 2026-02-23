import { useState, useEffect } from "react"
import logo from "../assets/icons/ic_logo.png"

export default function Header() {
  // 현재 화면에 보여지는 활성화된 영역을 저장함
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "activities", "projects", "recruitment", "qna"]
      const scrollPosition = window.scrollY + (window.innerHeight / 2)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth"
      })
    }
  }
  
  const getNavClass = (sectionId) => {
    return activeSection === sectionId ? "text-white cursor-pointer" : "hover:text-white cursor-pointer"
  }

  return (
    <>
        {/* 배경 */}
        <header className="fixed top-0 left-0 w-full h-[70px] z-50 bg-[#333333] flex px-4 md:px-[94px] items-center justify-between">
            {/* 로고 + 가온누리 */}
            <div className="flex gap-[10px] items-center cursor-pointer" onClick={() => scrollToSection("home")}>
                <img src={logo} alt="가온누리 로고" className="h-[46px] w-[46px] rounded-full"/>
                <div className="text-white text-lg">
                    가온누리
                </div>
            </div>
            {/* 메뉴 */}
            <nav className="flex gap-4 md:gap-[75px] text-[#B2B2B2] text-sm md:text-lg">
                {/* 홈 */}
                <div onClick={() => scrollToSection("home")} className={getNavClass("home")}>
                    홈
                </div>
                {/* 활동 */}
                <div onClick={() => scrollToSection("activities")} className={getNavClass("activities")}>
                    활동
                </div>
                {/* 결과물 */}
                <div onClick={() => scrollToSection("projects")} className={getNavClass("projects")}>
                    결과물
                </div>
                {/* 모집 */}
                <div onClick={() => scrollToSection("recruitment")} className={getNavClass("recruitment")}>
                    모집
                </div>
                {/* QnA */}
                <div onClick={() => scrollToSection("qna")} className={getNavClass("qna")}>
                    QnA
                </div>
            </nav>
        </header>
    </>
  )
}