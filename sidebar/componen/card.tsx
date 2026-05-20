import Image from "next/image";

export default function Card() {
  return (

<div className="bg-black w-100 h-20 ">
    <div className="flex">
        <div>
            <img src="/uts.svg" alt="uts" />

            <h1>acimc</h1>
        </div>
        <div>
            <img src="./uts.svg" alt="image" />
        </div>
    </div>

</div>
  );
}
