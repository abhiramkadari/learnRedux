import { useSelector } from "react-redux"
//useselector is hook used for acccess the values of store.tsx reducers




export const CounterDisplay = () => {

  const countValue = useSelector((state:any)=> state.counterGlobalStoreVal.count);
  const abhi = useSelector((state:any)=> state.counterGlobalStoreVal.abhiram);

  return (
    <div className="mb-6 flex justify-center">
      <h1>{countValue}</h1>
      <h1 className="ml-5">{abhi}</h1>
    </div>
  )
}
