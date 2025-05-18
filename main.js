// header 
{
    const header = document.querySelector('header');
    header.style.height = `${window.innerHeight}px`;

    // name 글자 애니메이션
    const name_box = header.querySelector('.name');
    const t1 = gsap.timeline();
    t1.to(name_box,{opacity: 1, duration: 0.5, scale: 2});
    t1.to(name_box,{duration: 0.5, scale: 1 ,x:-150, y:-150});

    // Publisher 글자 애니메이션
    const publisher_box = header.querySelector('.publisher');
    const publisher_txt = 'Publisher';
    const p = publisher_txt.split("");

    p.forEach((item)=>{
        const span = document.createElement('span');
        span.textContent = item;
        span.style.fontSize = '100px';
        span.style.display = 'inline-block'
        span.style.opacity = 0;
        publisher_box.appendChild(span);
    });

    const spans = publisher_box.querySelectorAll('span');
    const t2 = gsap.timeline({delay: 1});
    t2.set(spans,{y:200})
    t2.to(spans,{duration:1, opacity:1, y:0, stagger: 0.1})

    // Portfolio 글자 애니메이션
    const portfolio_box = header.querySelector('.portfolio');
    const t3 = gsap.timeline({delay:2});
    t3.to(portfolio_box, {x:-1000, y:100, scale:1.5})
    t3.to(portfolio_box, { duration:1, opacity:1 ,x:0, ease: "power1.inOut"})  
}   
