import frameItem from '@/other/frameItem'

export default function(route){
    return frameItem.filter((item)=>{
    if(item.path.toUpperCase() == route.name.toUpperCase()){
        return false
    }
        return true
    })
}