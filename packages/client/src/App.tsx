import { useComponentValue } from "@latticexyz/react";
// import { useMUD } from "./MUDContext";
import { singletonEntity } from "@latticexyz/store-sync/recs";
// import { initGA, logPageView } from './ga';
import HomePage from './homePage'

export const App = () => {
  // const {
  //   components: { Counter },
  //   systemCalls: { increment },
  // } = useMUD();

  // const counter = useComponentValue(Counter, singletonEntity);
//  const a = initGA();
//   logPageView();
//   console.log(a)
  return (
    <>
 
      {/* <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div> */}
      {/* <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          // console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button> */}
      <HomePage/>
      
    </>
  );
};
