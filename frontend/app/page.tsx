import { blackFridayFlag  } from "./flags"

export default async function Page() {
    const black_friday await blackFridayFlag();

    return (
        <div>
            <h1> Welcome to the Cochoyaro black friday!! <h1/>
            { black_friday ? <button> Promo </button> : <button> Sem promo </button> }  
        <div/>
    )
};
