import React, { useEffect, useState } from "react";
import {Dim,CloseBtn,Image,SwipeLButton,SwipeRButton,ImageList,Container} from '../styled/imageDetailsStyled'

export interface ImageDetailsProps{
    url?: string | string[];
    onClosedDeatil?: ()=>void;
    idx?: number;
}

//todo esc 눌렀을때 꺼지기

const ImageDetails = ((props:ImageDetailsProps) => {
    const [dynamicHtml, setDynamicHtml] = useState<JSX.Element[]>([])
    const [index, setIndex] = useState<number>(props.idx !== undefined? props.idx : 0)

    const {url} = props
    let isMouseOverImage =0

    const handleImageMouseOver=()=> {
        isMouseOverImage = 1
    }

    const handleImageMouseLeave=()=> {
        isMouseOverImage = 0
    }
    
    useEffect(() => {
        let temp:JSX.Element[] =[]
        if(!Array.isArray(url)){
            temp.push(
                <Image src={url}/>
            )
        }else{
            let img_temp:JSX.Element[] =[]
            url.map(function(url_value:string,idx:number){
                img_temp.push(
                    <ImageList active={idx === index}>
                        <Image id={"image_"+idx} src={url_value} onMouseOver={handleImageMouseOver} onMouseLeave={handleImageMouseLeave} onWheel={(e)=>wheelEvent(e)}/>
                    </ImageList>
                )    
            })

            temp.push(
                <Container>
                    {img_temp}
                    <SwipeLButton data_disabled={index==0} onClick={goBack}> &#10094;</SwipeLButton>
                    <SwipeRButton data_disabled={index==url.length-1} onClick={goForward}> &#10095;</SwipeRButton>
                </Container>
            )
        }
        
        setDynamicHtml(temp)
    }, [props,index]);

    const goBack =()=>{
        let img:HTMLImageElement = document.getElementById("image_"+index) as HTMLImageElement
        console.log(img.width)
        setIndex(prev => prev -1)
    }

    const goForward=()=>{
        let img:HTMLImageElement = document.getElementById("image_"+index) as HTMLImageElement
        console.log(img.width)
        setIndex(prev => prev +1)
    }

    const wheelEvent=(e:React.WheelEvent<HTMLImageElement>)=>{
        if (!isMouseOverImage) {
            return
        }
    
        // if(e.ctrlKey){
            // let center = theChart.pointToData(e.clientX, e.clientY);
            // applyZoom(e.deltaY > 0 ? 1.1 : .9, center);
            let img:HTMLImageElement = document.getElementById("image_"+index) as HTMLImageElement
            if(e.deltaY >0){
                img.style.width = img.width *1.05 +"px"

                console.log("확대")
            }else{
                console.log("축소")
                img.style.width = img.width *0.95 +"px"
            }
        // }
    }

    return(
        <Dim>
            <CloseBtn onClick={props.onClosedDeatil}>&times;</CloseBtn>
            {dynamicHtml}
        </Dim>
    )
});

export default ImageDetails;