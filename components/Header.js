import Image from 'next/image';

function Header(props){
    return(
    <div className="header">
        <span className="hello-user">{props.user}</span>
        <Image
        src="/wallet.svg"
        width={50}
        height={50}
        />
    </div>
    );
}

export default Header;