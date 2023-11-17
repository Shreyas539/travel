import Image from "next/image"
type ButtonProps = {
    title:string;
    type:'button' | 'submit';
    icon?:string;
    variant: string;
    full?:boolean;
}
export const Button = ({type,variant,title,icon,full}:ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} /> }
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}
