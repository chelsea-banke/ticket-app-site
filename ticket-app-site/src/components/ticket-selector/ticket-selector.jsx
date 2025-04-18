import React, { useState } from "react";
import './ticket-selector.css';
import { Button } from "../button/button";

export const TicketSelector = ({className}) => {
    const [vipQty, setVipQty] = useState(0);
    const [classicQty, setClassicQty] = useState(0);

    const increment = (setter, value) => setter(value + 1);
    const decrement = (setter, value) => {
        if (value > 0) setter(value - 1);
    };

    return (
        <div className={`ticket-selector p-4 border border-gray-600 rounded-t space-y-4 bg-white ${className}`}>
            <table className="w-full text-sm table-auto text-center">
                <thead>
                    <tr className="border-b">
                        <th className="pb-2 text-left">Plan tarifaire</th>
                        <th className="pb-2">Prix</th>
                        <th className="pb-2 text-right">Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="py-2 text-left">Tribune VIP</td>
                        <td className="py-2">25 000 xfa</td>
                        <td className="py-2">
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => decrement(setVipQty, vipQty)}
                                    className="w-6 h-6 border rounded"
                                >
                                    −
                                </button>
                                <span>{vipQty}</span>
                                <button
                                    onClick={() => increment(setVipQty, vipQty)}
                                    className="w-6 h-6 border rounded"
                                >
                                    +
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 text-left">Tribune Classic</td>
                        <td className="py-2">10 000 xfa</td>
                        <td className="py-2">
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => decrement(setClassicQty, classicQty)}
                                    className="w-6 h-6 border rounded"
                                >
                                    −
                                </button>
                                <span>{classicQty}</span>
                                <button
                                    onClick={() => increment(setClassicQty, classicQty)}
                                    className="w-6 h-6 border rounded"
                                >
                                    +
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <span className="material-icons text-base">lock</span>
                    Paiement sécurisé
                </div>
                {/* <button className="bg-red-600 text-white px-4 py-2 text-xs rounded hover:bg-red-700">
                    Réserver mon ticket
                </button> */}
                <Button style="white" text={'Réserver mon ticket'} className={'text-xs'} />
            </div>
        </div>
    );
};