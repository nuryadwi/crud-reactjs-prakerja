import React from "react";
import './KursusComponent.css'

const KursusComponent = (props) => {
    return (
        <div className="pwrraper">
            <div className="wreaper">
                <div className="gambar">
                <img src="https://i.ibb.co/9ZwTVSc/johndoe.jpg" alt="johndoe" className="gambarpaket" border="0" />
                </div>
                <p className="harga">{props.nama}</p>
                <p className="harga">{props.harga}</p>
                <p className="harga">{props.deskripsi}</p>
            </div>
        </div>
    )
}

KursusComponent.defaultProps = {
    nama:"IG",
    harga: 0,
    deskripsi: "kosong"
}

export default KursusComponent;