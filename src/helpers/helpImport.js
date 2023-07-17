export const helpImport = (desktop, tablet, mobile, handdleBg) =>{
    const width = window.innerWidth
    
    if(width >= 1024) handdleBg(desktop)
    if(width < 1024 && width >= 768) handdleBg(tablet)
    if(width < 767) handdleBg(mobile)
}