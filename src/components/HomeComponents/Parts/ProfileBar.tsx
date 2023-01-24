import { defaultUser } from "../../Ejemplo"

export const ProfileBar = () => {
  return (
    <div className="flex flex-row justify-center rounded-full w-full mb-2 items-center ml-2">
      <img src={defaultUser.photo} className="rounded-full h-10 w-10"/>
      <div className="flex flex-1 flex-col xl:ml-2">
        <div className="flex flex-row items-start">
          <span className="hidden xl:block font-semibold">{defaultUser.username}</span>         
        </div>
        <span className="hidden xl:block">@{defaultUser.username}</span>
      </div>      
    </div>
  )
}
