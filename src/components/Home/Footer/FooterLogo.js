import icon1 from "../img/icon-1.png";

const FooterLogo = () => {
    return (
        <div className="col-md-6">
            <h1 className="text-primary mb-4">
                <img className="img-fluid me-2" src={icon1} alt="" style={{width: '45px'}} />
                CryptoCoin
            </h1>
            <span>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit, sed stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu di
                am amet diam et eos. Clita erat ipsumet lorem et sit.
            </span>
        </div>
    );
};
export {FooterLogo};