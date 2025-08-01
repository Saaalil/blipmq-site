import {X} from 'lucide-react';
import * as React from "react";
import Rocket from "../assets/animation/Rocket in space-l5VfN.json";
import type {Props} from "../@types/icons.ts";
import Lottie from "lottie-react"


const ComingSoonModal: React.FC<Props> = ({onClose}: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white px-6 py-6 rounded-2xl shadow-xl text-center max-w-sm w-full relative">
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                    onClick={onClose}
                >
                    <X className="w-5 h-5"/>
                </button>


                <Lottie
                    animationData={Rocket}
                    loop={true}
                    style={{height: '180px', width: '180px', margin: '0 auto'}}
                />

                <h3 className="text-xl font-semibold mt-2 mb-1 text-gray-800">Coming Soon</h3>
                <p className="text-sm text-gray-600">We’re cooking up something awesome. <br/> Stay tuned.</p>
            </div>
        </div>
    );
};

export default ComingSoonModal;
