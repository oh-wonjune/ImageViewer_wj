import React, { useEffect, useState } from "react";
import {SwipeLButton,SwipeRButton,Container,ImageList,Image} from '../styled/imageViewerStyled'
import ImageDetails from "./imageDetails";

export interface IReactImageViewStyleChangeProps {
  scale?: number;
  translateX?: number;
  translateY?: number;
  rotateZ?: number;
}

export interface ImageViewConfig {
  onLoadStart?: (url: string) => void;
  onLoad?: (image: HTMLImageElement) => void;
  onLoadError?: (err: any) => void;
  onStyleChange?: (opts: IReactImageViewStyleChangeProps) => void;
}

export interface ImageViewerProps extends ImageViewConfig {
  url?: string | string[];
}

const ImageViewer = ((props: ImageViewerProps) => {
    const [dynamicHtml, setDynamicHtml] = useState<JSX.Element[]>([])
    const [index,setIndex] = useState(0)
    const [show_details,setShow_details] = useState(false)

    const {url} =props

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
                    <ImageList active={idx === index} >
                        <Image src={url_value} onClick={onClickImage}/>
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
        setIndex(prev=>prev - 1)
    }

    const goForward =()=>{
        setIndex(prev=>prev + 1) 
    }

    const onClickImage =()=>{
        setShow_details(true)
    }

    const onClosedDeatil=()=>{
    
        setShow_details(false)
    }

    return( 
        <div>
            {dynamicHtml}
            {show_details&&
                <ImageDetails url={url} onClosedDeatil={onClosedDeatil} idx={index}/>
            }
         </div>
        )
});

export default ImageViewer;
