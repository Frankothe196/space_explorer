import { useState, useRef, useEffect } from "react"
const Loading = ()=>{
    const [loaded, setLoader] = useState(false)
    const loadDivRef = useRef()
    useEffect(()=>{
        window.addEventListener('load', function () {
            setTimeout(() => {
                loadDivRef.current.className="loading hidden"
                
            }, 2000);
            setLoader(true)
        })

    },
    [])
    
    return(
        <div className="loading" ref={loadDivRef}>
            <h2>{loaded?"Welcome":"Loading"}</h2>
        </div>
    )
}

export default Loading