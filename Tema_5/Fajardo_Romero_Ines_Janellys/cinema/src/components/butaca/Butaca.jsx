import Header from "../../layout/Header";
import "./butacas.css";
import "../../index.css";
import React, {useState, useEffect} from "react";
import { useButaca } from "../../hook/useButaca";

function Butaca() {

    const { ButacaItems, suggest, butacaData } = useButaca();

    const handleButaca = () => {
        suggest();
    };


    useEffect(() => {
        butacaData();
    }, []);

    return(
        <>
            <Header title='Butacas'/>
            <div className="body-content-pantalla"></div>
            <div className="container text-center body-content-butacas d-grid gap-3" id="butacas">
                {ButacaItems.map((butacas, index) => (
                    <div className="row" key={index}>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-1 p-3 fila-desc">Fila {index + 1}</div>
                                <div className="col-11">
                                    <div className="row">
                                        {butacas.slice(0, 12).map((butaca, jindex) => (
                                            <div key={butaca.id} className={'asientos col p-3 ' + (butaca.estado ? 'butacas_escogidas' : '')}
                                                 id={butaca.id}>{jindex + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-9">
                                    <div className="row">
                                        {butacas.slice(12, 14).map((butaca, jindex) => (
                                            <div key={butaca.id} className={'asientos col p-3 ' + (butaca.estado ? 'butacas_escogidas' : '')}
                                                 id={butaca.id}>{jindex + 13}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container text-center ">
                <div className="mb-3">
                    <label className="form-label label_text">Indica cuántos asientos quieres</label>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        defaultValue="0"
                        className="form-control num_butacas"
                        id="num_asientos"
                    />
                </div>
                <div className="mb-3">
                    <button
                        type="button"
                        id="button_reserva"
                        className="btn btn-warning label_text font-confirmar"
                        onClick={() => handleButaca()}
                    >
                        Confirmar Reserva
                    </button>
                </div>
            </div>
        </>
    );
}

export default Butaca;