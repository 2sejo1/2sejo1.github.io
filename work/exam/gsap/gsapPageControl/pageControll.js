gsap.utils.toArray('.item').forEach((item) => {
    let color = item.getAttribute('data-bgColor')
    console.log(color);
    // 스크롤에 따라 section에 지정한 색으로 변경하기
    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 5%",
        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.5
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.5
        }),
    })
})
// 값을 지정하는 방법 a href="#조소번지"
// index
// data-변수명

// nav 클릭 위치 찾아가기
// 배열로 값이 저장된다
let links = gsap.utils.toArray('nav ul li a')
console.log(links)
links.forEach(link => {
    let elem = document.querySelector(link.getAttribute('href'))
    console.log(elem)

    ScrollTrigger.create({
        trigger: elem,
        // 스크롤할때 특징 section이 화면 중앙에 위치하면
        start:"top center",
        end:"bottom center",
        // 해당 Nav의 링크를 활성화한다
        onToggle:self=>setActive(link)
    })
    let linkST=ScrollTrigger.create({
        trigger:elem,
        // 사용자가 링크를 클릭하면 해당 section상단으로 스크롤을 이동해라
        start:"top top",
    })
    link.addEventListener('click',e=>{
        e.preventDefault()
        // 동시에 여러 스크롤 애니메이션이 발생하면 애니메이션 간의 충동을 방지하는 속성
        gsap.to(window,{duration:1,scrollTo:linkST.start,overwrite:"auto"})
    })
})

function setActive(link){
    links.forEach(el=>el.classList.remove('on'))
    link.classList.add('on')
}

// 부드러운 스크롤 애니메이션 구현

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)