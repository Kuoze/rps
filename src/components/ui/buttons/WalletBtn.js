export const WalletBtn = ( { handleClick }) => {
    return (
       <button type="button" className="btn-hover btn-wallet" onClick={ handleClick }>
           <span>Connect Wallet</span>
       </button> 
    );
}