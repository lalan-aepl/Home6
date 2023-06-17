
import Image from "next/image"
const MakingEassyCard = ({btnBg,img,step,title,msg}) => {
  return (
    <div className="bg-normalWhite shadow-md max-w-[350px]"> 
        <Image src={img} alt="not found"/>
        <div className="p-4">
            <button   className="p-1 bg-btnColor text-normalWhite rounded-md text-sm">{step}</button>
            <h1 className="font-semibold py-1 text-base">{title}</h1>
            <p className="text-sm   font-sans">{msg}</p>
        </div>
    </div>
  )
}

export default MakingEassyCard